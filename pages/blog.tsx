import fetch from 'node-fetch';
import { BlogItem } from '@/components/Elements/BlogItem';
import { HeaderTitle } from '@/components/Elements/HeaderTitle';
import { PageArea } from '@/components/Elements/PageArea';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/29ae965b4b024753ad75a5c0af8e0f10`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts
    }
  };
}

function Blog({ posts }) {
  const [searchResults, setSearchResults] = useState(posts);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    setSearchResults(
      posts.filter((result) =>
        result.title.toLowerCase().includes(data.hledat.toLowerCase())
      )
    );
  };

  return (
    <PageArea>
      <HeaderTitle title="Blog" />
      <form
        className=" w-full flex items-center justify-center   "
        onChange={handleSubmit(onSubmit)}
      >
        <input
          className="px-4 py-2 font-light  w-1/2 bg-primary-100 dark:bg-dark-100 rounded-lg"
          type="text"
          placeholder="Hledat..."
          {...register('hledat', {})}
        />
      </form>

      {searchResults
        ? searchResults.map((post) => <BlogItem data={post} key={post.id} />)
        : posts.map((post) => <BlogItem data={post} key={post.id} />)}
      {!searchResults.length && (
        <p className=" text-lg flex justify-center mt-4 mb-4">
          Nic jsem tu nenašel.
        </p>
      )}
    </PageArea>
  );
}

export default Blog;
