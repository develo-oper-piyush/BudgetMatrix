const Footer = (prop) => {
    const footerItems = [
        {
            services: ["Track Expense", "Personal Expense", "Your Expenses"],
        },
        {
            company: ["About Us", "Contact"],
        },
        {
            legal: ["Terms of use", "Privacy Policy", "Cookie Policy"],
        },
    ];

    return (
        <div
            className={`w-full text-white h-auto py-10 flex pl-8 pr-8 justify-evenly items-center bg-charcoal rounded-t-2xl shadow-[5px_3px_15px_rgba(0,0,0,0.3)] hover:shadow-violet-300 transition-all duration-300 ease-in-out ${prop.className}`}
        >
            {footerItems.map((item, idx) => {
                const keys = Object.keys(item);

                return keys.map((key) => (
                    <div className="list-none" key={idx}>
                        <h3 className="uppercase mb-3">{key}</h3>
                        <div>
                            {item[key].map((val, Idx) => (
                                <li key={Idx}>{val}</li>
                            ))}
                        </div>
                    </div>
                ));
            })}
        </div>
    );
};

export default Footer;
