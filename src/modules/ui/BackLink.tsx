import Link from 'next/link';
type Props = {
    href: string;
    name: string;
};
function NavLink({ href, name }: Props) {
    return (
        <div className="mb-6 px-6 md:px-12 ">
            <Link href={href}>
                <a className="item-center  flex ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        className="fill-current"
                    >
                        <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
                    </svg>
                    <span className="ml-2">Zpět</span>
                </a>
            </Link>
        </div>
    );
}

export default NavLink;
