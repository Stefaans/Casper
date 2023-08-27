import { useEffect, useRef, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useMessages } from '@/services/MessageProvider';

/**
 * This form submits a new message to the message list
 * The messages are managed by the MessageProvider
 */
export const NewMessageForm = () => {
  const {addMessage} = useMessages();
  const [newMessage, setNewMessage] = useState<string>('');
  const ref = useRef<null | HTMLInputElement>(null);

  // Focus the input when the component is mounted
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  // Add the new user message to the list; setNewMessage() will take care of the bot response
  const submitNewMessage = () => {
    addMessage({role: 'user', content: newMessage});
    setNewMessage('');
  }

  return (
    <form
      className="w-full lg:max-w-4xl flex items-center"
      onSubmit={(evt) => evt.preventDefault()}
    >
      <input
        type="text"
        className="w-full ml-16 py-2 px-4 pr-10 rounded-md border-1 border-sky-400 dark:border-sky-600 focus:border-sky-300 focus:dark:border-sky-500 ring-0 focus:ring-0 bg-sky-100 dark:bg-sky-700 focus:dark:outline-none dark:text-gray-100 dark:placeholder-gray-400"
        placeholder="Ask or tell me something..."
        autoFocus
        ref={ref}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        className="absolute right-6 rounded-lg p-1 text-sky-400 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-sky-600"
        onClick={submitNewMessage}
        type="submit"
      >
        <PaperAirplaneIcon className="w-6 h-6 fill-sky-200 dark:fill-none"/>
      </button>
    </form>
  );
};
