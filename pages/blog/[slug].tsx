import { PageArea } from '@/components/Elements/PageArea';
import Link from 'next/link';
import React from 'react';
import { NotionRenderer, BlockMapType } from 'react-notion';

import { getAllPosts } from '../blog';
import { HeaderTitle } from '@/components/Elements/HeaderTitle';
import BackLink from '@/components/Elements/BackLink';

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks: BlockMapType = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());
  console.log(blocks);
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
  <div className="pt-24 md:pt-32 ">
    <BackLink href="/projects" name="Zpet" />

    <div className="mx-20 max-w-4xl"></div>
    <PageArea>
      <div>
        <h1 className="text-5xl pb-2">{post.title}</h1>
        {blocks ? <NotionRenderer blockMap={blocks} /> : <h1>Loading</h1>}
      </div>
    </PageArea>
  </div>
);
export default Post;
