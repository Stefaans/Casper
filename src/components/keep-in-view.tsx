import { useEffect, useRef } from 'react';
import { useMessages } from '@/services/MessageProvider';

/**
 * This component is used to keep the view scrolled to the bottom of the page
 */
export const KeepInView = () => {
  const {messages} = useMessages();
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [messages.length]);

  return (
    <div ref={ref} className="invisible"></div>
  );
}
