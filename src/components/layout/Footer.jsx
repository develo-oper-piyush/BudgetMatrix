import { NavLink } from "react-router-dom";

const Footer = (prop) => {
  const footerItems = [
    {
      title: "services",
      links: [
        { label: "Track Expense", to: "/dashboard" },
        { label: "Personal Expense", to: "/dashboard" },
        { label: "Your Expenses", to: "/dashboard" },
      ],
    },
    {
      title: "company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Coming Soon", to: "/coming-soon" },
      ],
    },
    {
      title: "legal",
      links: [
        { label: "Terms of use", to: "/terms" },
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Cookie Policy", to: "/cookies" },
      ],
    },
  ];

  return (
    <div
      className={`w-full text-white h-auto py-10 flex pl-8 pr-8 justify-evenly items-center bg-charcoal rounded-t-2xl shadow-[5px_3px_15px_rgba(0,0,0,0.3)] hover:shadow-violet-300 transition-all duration-300 ease-in-out ${prop.className}`}
    >
      {footerItems.map((section) => (
        <div className="list-none" key={section.title}>
          <h3 className="uppercase mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                {section.title === "legal" ? (
                  <span className="text-sm text-gray-200">{link.label}</span>
                ) : (
                  <NavLink
                    to={link.to}
                    className="cursor-pointer text-sm text-gray-200 transition hover:text-violet-300"
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
