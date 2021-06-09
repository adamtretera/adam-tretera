import fetch from 'node-fetch';
import { BlogItem } from '@/components/Elements/BlogItem';
import { HeaderTitle } from '@/components/Elements/HeaderTitle';
import { PageArea } from '@/components/Elements/PageArea';
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
    <PageArea>
      <HeaderTitle title="Blog" />

      {posts.map((post) => (
        <BlogItem data={post} key={post.id} />
      ))}
    </PageArea>
  );
}

export default Blog;
