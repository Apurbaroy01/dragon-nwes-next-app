"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ href, children }) => {
    const Pathname  = usePathname();
    const isActive = Pathname === href;
    console.log(Pathname);
    return (
        <Link href={href} className={isActive ? "text-blue-500" : "text-gray-500"}>
            {children}
        </Link>
    );
};

export default NavLink;