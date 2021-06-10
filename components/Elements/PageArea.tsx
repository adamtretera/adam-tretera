import React from 'react';

export function PageArea({ children }) {
  return (
    <div className=" mx-12 md:max-w-screen-md md:m-auto screen ">
      {children}
    </div>
  );
}
