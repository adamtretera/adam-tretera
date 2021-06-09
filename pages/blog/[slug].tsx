import { NotionRenderer } from 'react-notion';

import { getAllPosts } from '../blog';

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(
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
  <div>
    <h1>{post.title}</h1>
    <NotionRenderer blockMap={blocks} />
  </div>
);
export default Post;
