import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useMessages } from '@/services/MessageProvider';

export const NewMessageForm = () => {
  const {addMessage} = useMessages();
  const [newMessage, setNewMessage] = useState<string>('');

  const submitNewMessage = () => {
    addMessage({role: 'user', content: newMessage});
    setNewMessage('');
  }

  return (
    <form
      className="p-2 w-full lg:max-w-4xl flex items-center"
      onSubmit={(evt) => evt.preventDefault()}
    >
      <input
        type="text"
        className="w-full bg-transparent outline outline-1 outline-gray-100 rounded-md p-2 pr-10 dark:outline-white dark:text-white"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Ask a question..."
      />
      <button
        className="absolute right-3 rounded-lg p-1 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-slate-600"
        onClick={submitNewMessage}
        type="submit"
      >
        <PaperAirplaneIcon className="w-6 h-6"/>
      </button>
    </form>
  );
};
