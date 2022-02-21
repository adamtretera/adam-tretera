import { ProjectsCards } from './ProjectsCards';
import { FormattedMessage } from 'react-intl';

export function Projects() {
    return (
        <section>
            <h1 className="text-4xl sm:text-6xl">
                <FormattedMessage id="projects.title" />
            </h1>
            <ProjectsCards />
            <a href="https://github.com/adamtretera?tab=repositories">
                <div className="flex items-center justify-end  pt-8">
                    <p className="text-lg font-light   sm:mr-6  sm:text-2xl">
                        <FormattedMessage id="projects.github.text" />
                    </p>
                    <svg
                        width="60"
                        height="56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-1/2 stroke-current sm:w-20"
                    >
                        <path d="M13.994 48.526c1.534 1.103 4.026 1.933 7.947 1.24.007 1.097.017 2.136.024 2.975.008.82.013 1.449.013 1.758 0 .267-.097.528-.29.697-.178.156-.513.299-1.132.195C8.889 51.651.5 41.093.5 28.671.5 13.133 13.638.5 29.884.5c16.248 0 29.384 12.632 29.384 28.172 0 12.418-8.38 22.973-20.04 26.716-.633.111-.969-.032-1.145-.186-.19-.167-.287-.429-.287-.703 0-.312.003-.857.008-1.589l.009-1.258c.009-1.37.017-3.102.017-5.022 0-2.199-.62-3.843-1.472-4.932 3.043-.409 6.15-1.248 8.577-3.197 2.722-2.186 4.514-5.704 4.514-11.327 0-3.145-1.126-5.746-2.995-7.805.407-1.118 1.113-3.968-.411-7.669l-.09-.218-.226-.07-.147.479c.147-.478.147-.478.146-.479h0-.003l-.005-.002-.013-.004a1.3 1.3 0 00-.158-.034 3.367 3.367 0 00-.425-.043c-.367-.016-.9.007-1.607.15-1.384.28-3.434 1.018-6.231 2.811-2.37-.61-4.895-.914-7.398-.925h-.004c-2.503.01-5.025.315-7.392.925-2.8-1.793-4.853-2.531-6.238-2.811-.709-.143-1.242-.166-1.609-.15a3.373 3.373 0 00-.546.068 1.344 1.344 0 00-.037.01l-.014.003-.005.002h-.002 0c-.001 0-.002 0 .145.479l-.147-.478-.226.07-.09.218c-1.52 3.7-.815 6.55-.407 7.668-1.865 2.058-2.999 4.66-2.999 7.805 0 5.61 1.789 9.129 4.505 11.322 2.423 1.957 5.525 2.807 8.564 3.223-.593.763-1.07 1.798-1.3 3.103-.84.332-2.131.701-3.496.584-1.478-.126-3.077-.823-4.321-2.868l-.004-.006-.017-.029a6.448 6.448 0 00-.302-.441c-.21-.28-.52-.654-.932-1.036-.822-.76-2.07-1.574-3.722-1.685l-.014-.001h-.014l-.006.5.006-.5h0-.043a4.046 4.046 0 00-.429.024c-.24.026-.605.084-.893.241a.963.963 0 00-.428.438.866.866 0 00.013.717c.092.21.253.409.457.6.208.197.485.409.838.64l.033.023.034.014h0v.001h.002l.006.004.048.024c.044.025.114.065.205.124.18.119.443.314.75.608.609.586 1.396 1.574 2.048 3.16l.003.008a2.532 2.532 0 00.103.241c.073.155.184.368.345.616a6.42 6.42 0 001.64 1.703z" />
                    </svg>
                </div>
            </a>
        </section>
    );
}