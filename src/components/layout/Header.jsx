import Navbar from "./Navbar";

const Header = (prop) => {
    return (
        <div
            className={`w-full h-10 flex pl-8 pr-8 justify-between items-center text-white bg-charcoal shadow-[5px_0px_15px_rgba(255,255,255,0.3)] hover:shadow-emerald-300 hover:shadow-lg transition-all duration-300 ease-in-out ${prop.className}`}
        >
            <a href="#" target="_blank">
                Budget Matrix
            </a>
            <Navbar />
        </div>
    );
};

export default Header;
