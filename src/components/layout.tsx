import { MessageList } from '@/components/message-list';
import { NewMessageForm } from '@/components/new-message-form';

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen lg:max-w-4xl lg:mx-auto justify-between">
      <MessageList/>
      <NewMessageForm/>
    </div>
  );
}
