import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto  py-4">
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 min-w-xs max-w-lg mx-auto px-2">
        <div className="flex-3 flex justify-center">
          <img
            src="assets/logos/unifap-digital.png"
            alt="Unifap Digital Logo"
            className="w-full object-contain"
          />
        </div>
        <div className="flex-3 flex justify-center">
          <img
            src="assets/logos/unifap.png"
            alt="Unifap Logo"
            className="w-full object-contain"
          />
        </div>
        <div className="flex-2 flex justify-center">
          <img
            src="assets/logos/profei.png"
            alt="Profei Logo"
            className="w-fullobject-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
