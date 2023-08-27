import { MessageType } from '@/types';

export type MessageProps = {
  message: MessageType;
};

export const Message = (props: MessageProps) => {
  const {message} = props;

  return (
    <div className="text-gray-800 dark:text-white bg-white dark:bg-slate-800">
      {message.role === 'user' ? (
        <>
          <span className="sr-only">Message from you</span>
          <p className="grow ml-16 py-2 px-4 rounded-md bg-sky-200 dark:bg-sky-900">{message.content}</p>
        </>
      ) : (
        <>
          <span className="sr-only">Message from bot</span>
          <p className="grow mr-16 py-2 px-4 rounded-md bg-gray-200 dark:bg-gray-900 dark:text-gray-300">{message.content}</p>
        </>
      )}
    </div>
  );
};
