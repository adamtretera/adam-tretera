import { Fragment } from 'react';
import Head from 'next/head';
import { getDatabase, getPage, getBlocks } from '../lib/notion';
import Link from 'next/link';
import { databaseId } from './index.js';
import styles from './post.module.css';
import Block from '../components/Block';
export default function Post({ page, blocks }) {
  const title = page.properties.Name.title[0].plain_text;
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.container}>
        <h1 className="text-2xl md:text-4xl font-bold my-4 mt-32">{title}</h1>

        <section>
          {blocks.map((block) => console.log(block))}
          <Link href="/blog">
            <a className="bold">← Go home</a>
          </Link>
        </section>
      </article>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    props: {
      page,
      blocks
    },
    revalidate: 1
  };
};
