import Link from 'next/link';
type Props = {
  href: string;
  name: string;
};
function NavLink({ href, name }: Props) {
  // Must add passHref to Link
  return (
    <div className="px-6 md:px-12 mb-6 ">
      <Link href={href}>
        <a className="flex  item-center ">← Zpět</a>
      </Link>
    </div>
  );
}

export default NavLink;
