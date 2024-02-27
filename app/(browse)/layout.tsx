import { Navbar } from './_components/navbar';

const BrowseLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <Navbar />
            <div className="h-full">
                {children}
            </div>
        </>
    );
};

export default BrowseLayout;