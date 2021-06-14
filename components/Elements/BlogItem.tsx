import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';

export function BlogItem(blog) {
  return (
    <div className="cursor-pointer">
      <Link href={`/blog/${blog.data.slug}`}>
        <article className="p-10 hover:bg-primary-200 dark:hover:bg-dark-200  transition duration-50 ease-in-out rounded-lg my-3">
          <div>
            <h5 className="text-2xl">{blog.data.title}</h5>
            <p className="text-lg font-light">{blog.data.perex}</p>

            <div className="flex items-center pt-2">
              <img
                src={`${blog.data.autor[0].profilePhoto}`}
                className="filter grayscale rounded-full w-10 h-10"
              />
              <div className="px-4">
                <p className="text-sm">{blog.data.autor[0].fullName}</p>
                <p className="text-sm font-light">
                  {format(new Date(blog.data.date), 'Lo MMMM y', {
                    locale: cs
                  })}
                </p>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
