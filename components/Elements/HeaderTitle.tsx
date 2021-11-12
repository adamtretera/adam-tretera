import React from 'react';

export function HeaderTitle({ title }) {
  return (
    <header>
      <h1 className="pt-24 sm:pt-32  text-4xl sm:text-6xl  flex justify-center	py-4">
        {title}
      </h1>
    </header>
  );
}
