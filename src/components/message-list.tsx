import React from 'react';
import { Message } from './message';
import { useMessages } from '@/services/MessageProvider';

/**
 * This component is used to display the list of messages
 */
export const MessageList = () => {
  const {messages} = useMessages();
  const visibleMessages = messages.filter((message) => ['user', 'assistant'].includes(message.role));

  return (
    <div className="flex flex-col justify-start gap-4">
      {visibleMessages.map((message, index) => (
        <Message message={message} key={index}/>
      ))}
    </div>
  );
};
