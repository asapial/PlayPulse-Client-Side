import React from 'react';
import Playpulsenameplate from '../../Atoms/Playpulsenameplate';

const Copyright = () => {
  return (
    <footer className="bg-base-300 text-center py-10 h-[600px] ">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <h3 className="text-5xl font-bold text-primary"><Playpulsenameplate></Playpulsenameplate></h3>
        <p className="text-accent-700  max-w-2xl mx-auto text-xl text-justify">
          PlayPulse is your ultimate destination for athletic adventures — connecting sports enthusiasts with thrilling events, passionate communities, and unforgettable achievements. Whether you're a pro athlete or just starting out, PlayPulse keeps your energy high and your goals within reach.
        </p>

        <p className="text-accent-600 text-lg text-justify">
          All content, including event data, images, and branding, is the intellectual property of PlayPulse unless otherwise stated. Unauthorized use or duplication without explicit permission is strictly prohibited.
        </p>

        <p className="text-accent-500 text-lg  flex items-center justify-center">
          &copy; {new Date().getFullYear()} <span className="font-medium text-primary"><Playpulsenameplate></Playpulsenameplate></span>. All rights reserved. | Powered by passion, React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Copyright;
