type HobbiesCardProps = {
    title: string;
    children: JSX.Element;
};
export const HobbiesCard = ({ title, children }: HobbiesCardProps) => (
    <div className="item-center flex h-32 flex-col justify-center">
        {children}
        <p className="pt-1 font-light">{title}</p>
    </div>
);
