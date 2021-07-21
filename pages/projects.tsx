import fetch from 'node-fetch';
import { ProjectsItem } from '@/components/Elements/ProjectsItem';
import { HeaderTitle } from '@/components/Elements/HeaderTitle';
import { PageArea } from '@/components/Elements/PageArea';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const getAllProjects = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/3049d9bdbf774124b5afb9ee8b1ad197`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllProjects();

  return {
    props: {
      posts
    }
  };
}

function ProjectsPage({ posts }) {
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
      <HeaderTitle title="Projekty" />
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
        ? searchResults.map((post) => (
            <ProjectsItem data={post} key={post.id} />
          ))
        : posts.map((post) => <ProjectsItem data={post} key={post.id} />)}
      {!searchResults.length && (
        <p className=" text-lg flex justify-center mt-4 mb-4">
          Nic jsem tu nenašel.
        </p>
      )}
    </PageArea>
  );
}

export default ProjectsPage;
