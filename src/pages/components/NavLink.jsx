import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href || ""}
      scroll={true}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] dark:text-slate-900 sm:text-xl rounded md:p-0 dark:hover:text-black hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
