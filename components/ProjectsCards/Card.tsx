import React from 'react';
import data from './CardData';

export function Card() {
  const projects = data;
  const listItems = projects.map((project) =>
    project.id % 3 === 0 || project.id % 4 === 0 ? (
      <img
        src={project.image}
        key={project.id}
        className="w-full filter grayscale hover:grayscale-0 h-60 rounded-2xl shadow-lg object-contain bg-primary-100"
      ></img>
    ) : (
      <img
        src={project.image}
        key={project.id}
        className="w-full h-60  filter grayscale hover:grayscale-0 col-span-2 rounded-2xl shadow-lg object-cover bg-primary-100"
      ></img>
    )
  );
  return (
    <div className="grid sm:grid-cols-5 grid-cols-2  gap-4 pt-8">
      {listItems}
    </div>
  );
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
