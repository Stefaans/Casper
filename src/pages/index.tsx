import { MessageProvider } from '@/services/MessageProvider';
import { Layout } from '@/components/layout';

export default function HomePage() {

  return (
    <MessageProvider>
      <Layout/>
    </MessageProvider>
  );
}
