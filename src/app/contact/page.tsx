import { Contact } from '@/components/contact-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Preach Technologies | Contact",
};

const page = () => {
  return (
    <Contact />
  )
}

export default page