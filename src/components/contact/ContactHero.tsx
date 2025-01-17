import Image from 'next/image';
import { escapeApostrophe } from '@/utils/textUtils';

const ContactHero = () => {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src="/images/contact-hero.jpg"
        alt="Contact Us"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            {escapeApostrophe("We're here to help with your environmental health and safety needs")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
