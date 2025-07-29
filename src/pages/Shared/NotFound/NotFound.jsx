import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFF8F2] text-[#444] px-6 relative">
      <img src="/src/assets/logo.png" alt="Bari Ghar" className="w-130 h-auto" />
      <h1 className="text-[120px] font-bold text-[#003448] leading-none mb-4 animate-bounce">404</h1>
      <h2 className="text-[60px] text-[#003448] leading-none mb-4 animate-bounce">Not Found</h2>
      <p className="text-center text-[#000] text-lg max-w-md">
        Looks like this room’s been rented out. But don’t worry—Bari Ghar always has space for you.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-[#003448] text-white py-2 px-6 rounded hover:bg-[#ffffff] hover:text-[#003448]  transition"
      >
        Back to Home
      </a>
      <div className="absolute bottom-4 text-xs text-[#999]">
        Bari Ghar &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default NotFound;