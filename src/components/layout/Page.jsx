import Footer from "./Footer";
import Header from "./Header";

const Page = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header className="" />
            <main className="flex-1 w-full">{children}</main>
            <Footer className="" />
        </div>
    );
};

export default Page;
