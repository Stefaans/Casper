import React, { createContext, useContext, useEffect, useState } from 'react';
import { MessageType } from '@/types';
import { Config } from '@/config';

interface MessageContextProps {
  messages: MessageType[];
  addMessage: (message: MessageType) => void;
}

const initialMessageContext: MessageContextProps = {
  messages: [],
  addMessage: () => {

  },
};

const MessageContext = createContext<MessageContextProps>(initialMessageContext);

/**
 * The MessageProvider uses Context to manage  the state of the message list
 */
export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    setMessages(Config.persona);
  }, []);

  const addMessage = ({role, content}: MessageType) => {
    const newMessages = [...messages, {role: role, content: content}];
    setMessages(newMessages);
    getResponseMessage(newMessages).then((response) => {
        setMessages(prev => [...prev, {role: 'assistant', content: response}]);
      }
    );
  };

  const getResponseMessage = async (messages: MessageType[]) => {
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({messages})
      });

      const json = await response.json();
      return json.data.choices[0].message.content;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MessageContext.Provider value={{messages, addMessage}}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = (): MessageContextProps => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
