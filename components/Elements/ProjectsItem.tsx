import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';
import Image from 'next/image';
import { Badge } from './ProjectBadge';

export function ProjectsItem(projects) {
  return (
    <div className="cursor-pointer filter grayscale hover:grayscale-0">
      <Link href={`/projects/${projects.data.slug}`}>
        <article className=" hover:bg-primary-200 dark:hover:bg-dark-200   transition duration-50 ease-in-out rounded-lg my-3 grid grid-cols-2 justify-between items-center">
          <div className="p-10">
            <h5 className="text-2xl">{projects.data.title}</h5>
            <p className="text-lg font-light">{projects.data.perex}</p>

            <div className="flex mt-4">
              <Badge array={projects.data.stack} />
            </div>
          </div>
          <div
            className="w-1/4"
            style={{ position: 'relative', width: '80%', height: '80%' }}
          >
            {projects.data?.img ? (
              <Image
                className="rounded-lg "
                src={projects.data.img[0].url}
                alt={projects.data.title}
                layout="fill"
                objectFit="contain"
                quality="high"
              />
            ) : (
              ''
            )}
          </div>
        </article>
      </Link>
    </div>
  );
}
