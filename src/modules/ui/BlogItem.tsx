import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';
import Image from 'next/image';

export function BlogItem(blog) {
    return (
        <div className="cursor-pointer">
            <Link href={`/blog/${blog.data.slug}`}>
                <article className="duration-50 my-3 rounded-lg  p-10 transition ease-in-out hover:bg-primary-200 dark:hover:bg-dark-200">
                    <div>
                        <h5 className="text-2xl">{blog.data.title}</h5>
                        <p className="text-lg font-light">{blog.data.perex}</p>

                        <div className="flex items-center pt-2">
                            <Image
                                alt="Adam Tretera - frontend developer"
                                src={`${blog.data.autor[0].profilePhoto}`}
                                className="h-10 w-10 rounded-full grayscale filter"
                            />
                            <div className="px-4">
                                <p className="text-sm">{blog.data.autor[0].fullName}</p>
                                <p className="text-sm font-light">
                                    {format(new Date(blog.data.date), 'Lo MMMM y', {
                                        locale: cs,
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
