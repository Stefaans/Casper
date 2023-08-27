import { MessageProvider } from '@/services/MessageProvider';
import { Layout } from '@/components/layout';

/**
 * The home page
 * It uses the MessageProvider to provide the message list state to the child components
 * The Layout component manages the visible components
 */
export default function HomePage() {

  return (
    <MessageProvider>
      <Layout/>
    </MessageProvider>
  );
}
