import projects from './CardData';
import Image from 'next/image';

export function ProjectsCards() {
    const listItems = projects.map(project =>
        project.id % 3 === 0 || project.id % 4 === 0 ? (
            <div
                key={project.id}
                className="relative h-56 w-full rounded-2xl  bg-primary-100 object-contain shadow-lg grayscale filter transition delay-150 ease-in-out hover:grayscale-0"
            >
                <Image alt={project.image} layout="fill" src={project.image} className="rounded-2xl" />
            </div>
        ) : (
            <div
                key={project.id}
                className="relative col-span-2 w-full rounded-2xl bg-primary-100 object-cover shadow-lg grayscale filter transition delay-150 ease-in-out hover:grayscale-0"
            >
                <Image alt={project.image} layout="fill" src={project.image} className="rounded-2xl" />
            </div>
        ),
    );
    return <div className="grid grid-cols-2 gap-4  pt-4 sm:grid-cols-5 sm:pt-8">{listItems}</div>;
}
