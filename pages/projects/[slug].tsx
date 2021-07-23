import BackLink from '@/components/Elements/BackLink';
import { PageArea } from '@/components/Elements/PageArea';
import Link from 'next/link';
import React from 'react';
import { NotionRenderer, BlockMapType } from 'react-notion';

import { getAllProjects } from '../projects';

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllProjects();
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
  const posts = await getAllProjects();
  return {
    paths: posts.map((row) => `/projects/${row.slug}`),
    fallback: true
  };
}

const Post = ({ post, blocks }) => (
  <div className="pt-24 md:pt-32 ">
    <BackLink href="/projects" name="Zpet" />
    <PageArea>
      <div>
        {post.title ? <h1 className="text-5xl pb-2">{post.title}</h1> : null}
        {blocks ? <NotionRenderer blockMap={blocks} /> : <h1>Loading</h1>}
      </div>
    </PageArea>
  </div>
);
export default Post;
