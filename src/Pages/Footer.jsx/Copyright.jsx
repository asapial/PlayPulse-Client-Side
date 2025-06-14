import React from 'react';

const Copyright = () => {
  return (
    <footer className="bg-base-300 border-t border-gray-200 text-center py-10  h-[600px]">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <h3 className="text-2xl font-bold text-primary">Plateful</h3>
        <p className="text-accent-700 text-base max-w-2xl mx-auto">
          Plateful is your trusted companion in the kitchen — a vibrant collection of recipes, cooking tips, and flavor inspirations from around the globe. Whether you're a beginner or a seasoned chef, our mission is to make your culinary journey enjoyable, easy, and delicious.
        </p>

        <p className="text-accent-600 text-sm">
          All content, including recipes, images, and branding, is the intellectual property of Plateful unless otherwise stated. Unauthorized use or duplication without explicit permission is strictly prohibited.
        </p>

        <p className="text-accent-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-medium text-primary">Plateful</span>. All rights reserved. | Built with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Copyright;
