type Props = {
  title: string;
  children: JSX.Element;
};
export const Card = ({ title, children }: Props) => (
  <div className="grid text-center fill-currens items-end justify-center h-38">
    {children}
    <p className="font-light pt-1">{title}</p>
  </div>
);
