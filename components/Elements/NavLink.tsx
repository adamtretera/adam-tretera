import Link from 'next/link';
type Props = {
  href: string;
  name: string;
};
function NavLink({ href, name }: Props) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <a className="text-xl font-light block mx-4 ">{name}</a>
    </Link>
  )
}

export default NavLink;
