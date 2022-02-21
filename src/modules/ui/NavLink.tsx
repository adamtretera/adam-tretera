import Link from 'next/link';

type NavLinkProps = {
    href: string;
    name: string;
};

function NavLink({ href, name }: NavLinkProps) {
    return (
        <Link href={href} passHref>
            <a className="mx-4 block text-xl font-light ">{name}</a>
        </Link>
    );
}

export default NavLink;
