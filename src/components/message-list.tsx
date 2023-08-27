import React from 'react';
import { Message } from './message';
import { useMessages } from '@/services/MessageProvider';

export const MessageList = () => {
  const {messages} = useMessages();
  const visibleMessages = messages.filter((message) => ['user', 'assistant'].includes(message.role));

  return (
    <div className="overflow-auto mt-10">
      {visibleMessages.map((message, index) => (
        <Message message={message} key={index}/>
      ))}
    </div>
  );
};
