import { PageArea } from '@/components/Elements/PageArea';
import Link from 'next/link';
import React from 'react';
import { NotionRenderer, BlockMapType } from 'react-notion';

import { getAllPosts } from '../blog';
import { HeaderTitle } from '@/components/Elements/HeaderTitle';

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks: BlockMapType = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post
    }
  };
}
export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/blog/${row.slug}`),
    fallback: true
  };
}

const Post = ({ post, blocks }) => (
  <div className="pt-32 px-60">
    <Link href="/">
      <a className="opacity-70">← Zpět</a>
    </Link>
    <header>
      <h1 className="text-4xl sm:text-6xl  flex justify-center	py-4">
        {post.title}
      </h1>
    </header>
    <div className="mx-20 max-w-4xl"></div>
    <PageArea>
      <div>
        <NotionRenderer blockMap={blocks} />
      </div>
    </PageArea>
  </div>
);
export default Post;
