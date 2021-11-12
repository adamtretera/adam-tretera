import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home() {
  return (
    <main className="mx-12 md:max-w-screen-md md:m-auto">
      <Hero />
      <Projects />
      <About />
      <Hobbies />
    </main>
  );
}