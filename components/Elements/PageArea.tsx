import React from 'react';

export function PageArea({ children }) {
  return (
    <div className="pt-32 mx-12 md:max-w-screen-md md:m-auto screen ">
      {children}
    </div>
  );
}
