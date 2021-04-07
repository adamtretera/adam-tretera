import React from 'react';
import data from './CardData';
import Image from 'next/image';
export function Card() {
  const projects = data;
  const listItems = projects.map((project) =>
    project.id % 3 === 0 || project.id % 4 === 0 ? (
      <div key={project.id} className="w-full h-60 rounded-2xl shadow-2xl">
        <img src={project.image} />
      </div>
    ) : (
      <img
        key={project.id}
        className="w-full h-60 col-span-2 rounded-2xl shadow-2xl object-cover"
        src={project.image}
      />
    )
  );
  return <div className="grid grid-cols-5 gap-4 pt-8">{listItems}</div>;
}
// export async function getStaticProps() {
//   const res = await fetch('https://.../posts')
//
//   console.log(data);
//   if (!projects) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       projects
//     }
//   };
// }
