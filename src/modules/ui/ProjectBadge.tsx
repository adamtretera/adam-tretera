import React from 'react';

export function Badge({ array }) {
  return array.map((item) => {
    var i = Math.floor(Math.random() * 5);

    if (i == 1) {
      return (
        <div
          className="border-2 border-black"
          style={{ marginRight: '10px' }}
          key={item}
        >
          <p className="px-2 py-1 font-light">{item}</p>
        </div>
      );
    } else if (i == 2) {
      return (
        <div
          className="border-2 border-black bg-primary-100 dark:bg-dark-100 "
          style={{ marginRight: '10px' }}
          key={item}
        >
          <p className="px-2 py-1 font-light">{item}</p>
        </div>
      );
    } else if (i == 3) {
      return (
        <div
          className="border-2 border-black bg-primary-100 dark:bg-dark-100 "
          style={{ marginRight: '10px' }}
          key={item}
        >
          <p className="px-2 py-1 font-light">{item}</p>
        </div>
      );
    } else {
      return (
        <div
          className="border-2 border-black"
          style={{ marginRight: '10px' }}
          key={item}
        >
          <p className="px-2 py-1 font-light">{item}</p>
        </div>
      );
    }
  });
}
