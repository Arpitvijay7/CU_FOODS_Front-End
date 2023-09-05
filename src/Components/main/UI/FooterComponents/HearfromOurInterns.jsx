import React, { useEffect, useState } from 'react';

const HearFromOurInterns = () => { // Toggle between 'crimson' and 'white' themes
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Hear From Our Interns';
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center bg-white`}>
      <div className="text-center">
        <h1 className={`text-4xl font-bold  mb-4`}>Coming Soon!</h1>
        <p className={`text-lg mb-8`}>This Page is in under construction.</p>
      </div>
    </div>
  );
};

export default HearFromOurInterns;
