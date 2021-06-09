import { NotionRenderer, BlockMapType } from 'react-notion';
import Link from 'next/link';
import fetch from 'node-fetch';
import { BlogItem } from '@/components/Elements/BlogItem';
export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/29ae965b4b024753ad75a5c0af8e0f10`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  console.log(posts[1].autor);

  return {
    props: {
      posts
    }
  };
}

function Blog({ posts }) {
  return (
    <div className="pt-32 mx-12 md:max-w-screen-md md:m-auto">
      <h1 className="text-3xl flex justify-center	">Blog</h1>

      {posts.map((post) => (
        <BlogItem data={post} key={post.id} />
      ))}
    </div>
  );
}

export default Blog;
