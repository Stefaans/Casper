import { MessageList } from '@/components/message-list';
import { NewMessageForm } from '@/components/new-message-form';
import { KeepInView } from '@/components/keep-in-view';

/**
 * This component is used to keep the view scrolled to the bottom of the page
 * It stacks the message list and the new message form in a column
 * The KeepInView component keeps the view scrolled to the bottom of the page
 */
export const Layout = () => {
  return (
    <div className="flex flex-col justify-start gap-4 lg:max-w-4xl lg:mx-auto p-4">
      <MessageList/>
      <NewMessageForm/>
      <KeepInView/>
    </div>
  );
}
