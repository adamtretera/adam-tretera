import Head from 'next/head';
import Link from 'next/link';
import { getDatabase } from '../lib/notion';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Blog({ blogs, database }) {
  return (
    <div>
      <Head>
        <title>Můj Notion blog | Adam Tretera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-12 md:max-w-screen-md md:m-auto min-h-screen">
        <header>
          <h1 className="text-4xl sm:text-6xl mb-8 mt-32">Blog</h1>
        </header>

        <ol>
          {blogs.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              'cs-CZ',
              {
                month: 'long',
                day: '2-digit',
                year: 'numeric'
              }
            );
            const title = post.properties.Name.title[0].plain_text;
            const perex = post.properties.perex.rich_text[0].plain_text;
            const img = post.properties.img.files[0].name;

            console.log(img);
            return (
              <li key={post.id} className="">
                <Link href={`/${post.id}`}>
                  <a>
                    <img src={img} />

                    <h3 className="text-2xl">{title}</h3>
                    <p className="font-light text-lg mt-1">{perex}</p>
                    <p className="text-primary text-xs">{date}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      blogs: database
    },
    revalidate: 1
  };
};
