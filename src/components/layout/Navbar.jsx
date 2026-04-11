import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkClass = () =>
        `hover:pl-1 hover:pr-1 hover:bg-amber-200 transition-all duration-300 hover:text-violet-400 hover:scale-95 rounded-md`;

    return (
        <div className="flex gap-5">
            <NavLink className={navLinkClass} to="/">
                Home
            </NavLink>
            <NavLink className={navLinkClass} to="/dashboard">
                Dashboard
            </NavLink>
            <NavLink className={navLinkClass} to="/monthly-expenses">
                Monthly Expenses
            </NavLink>
            <NavLink className={navLinkClass} to="/about">
                About Us
            </NavLink>
            <NavLink className={navLinkClass} to="/contact">
                Contact Us
            </NavLink>
        </div>
    );
};

export default Navbar;
