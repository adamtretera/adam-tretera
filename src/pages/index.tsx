import { About, Hobbies, Projects, Hero } from 'modules/landingPage';

export default function Home() {
    return (
        <main className="mx-12 md:m-auto md:max-w-screen-md">
            <Hero />
            <Projects />
            <About />
            <Hobbies />
        </main>
    );
}
