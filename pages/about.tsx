import { BlogItem } from '@/components/Elements/BlogItem';
import { HeaderTitle } from '@/components/Elements/HeaderTitle';
import { PageArea } from '@/components/Elements/PageArea';
import en from '@/locales/en';
import cs from '@/locales/cs';
import { NotionRenderer, BlockMapType } from 'react-notion';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const blocks: BlockMapType = await fetch(
    `https://notion-api.splitbee.io/v1/page/ec121ba2dd5f4c5984a6c5d0836b7019`
  ).then((res) => res.json());

  return {
    props: {
      blocks
    }
  };
}
const About = ({ blocks }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;
  return (
    <PageArea>
      <HeaderTitle title="O mně" />
      <p className="text-lg sm:text-xl font-light pt-2">{t.aboutText}</p>
      {blocks ? (
        <NotionRenderer
          customBlockComponents={{
            bulleted_list: ({ blockValue, renderComponent }) => (
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-3"
                >
                  <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                  <path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path>
                </svg>
                <p className="font-light ml-2">
                  {blockValue.properties.title[0]}
                </p>
              </div>
            )
          }}
          blockMap={blocks}
        />
      ) : (
        <h1>Loading</h1>
      )}
    </PageArea>
  );
};
export default About;
