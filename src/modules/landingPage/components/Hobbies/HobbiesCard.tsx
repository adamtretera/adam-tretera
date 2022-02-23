type HobbiesCardProps = {
    title: string;
    children: JSX.Element;
};
export const HobbiesCard = ({ title, children }: HobbiesCardProps) => (
    <div className="item-center flex h-28 flex-col items-center justify-between">
        {children}
        <p className="font-light">{title}</p>
    </div>
);
