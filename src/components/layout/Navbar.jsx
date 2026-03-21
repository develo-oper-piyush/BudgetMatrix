const Navbar = () => {
    return (
        <div className="flex gap-5">
            <a
                className="hover:underline transition-all duration-300 hover:text-violet-400 hover:scale-95"
                href="#"
                target="_blank"
            >
                Link1
            </a>
            <a
                className="hover:underline transition-all duration-300 hover:text-violet-400 hover:scale-95"
                href="#"
                target="_blank"
            >
                Link2
            </a>
            <a
                className="hover:underline transition-all duration-300 hover:text-violet-400 hover:scale-95"
                href="#"
                target="_blank"
            >
                Link3
            </a>
            <a
                className="hover:underline transition-all duration-300 hover:text-violet-400 hover:scale-95"
                href="#"
                target="_blank"
            >
                Link4
            </a>
        </div>
    );
};

export default Navbar;
