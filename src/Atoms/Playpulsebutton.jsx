import React from 'react';

const Playpulsebutton = ({children}) => {
    return (
            <div
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-white py-3 rounded-xl 
             shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out 
             font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 text-center"
            >
              {children}
            </div>
    );
};

export default Playpulsebutton;