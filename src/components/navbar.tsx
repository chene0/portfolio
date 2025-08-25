import { Sections } from "@/content/portfolio";
import { Link } from 'react-scroll';

const res: React.JSX.Element[] = [];
for (const section of Sections) {
    res.push(
        <li><Link to={section.destination} smooth offset={-68}>{section.title}</Link></li>
    );
}

export function Navbar() {
    return (
        <div className="navbar-center mx-auto hidden lg:flex">
            <ul className="menu menu-horizontal mx-auto px-1">
                {...res}
            </ul>
        </div>
    );
}

export function MobileNavbar() {
    return (
        <div className="dropdown">
            <button tabIndex={0} type="button" className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <title>Navbar</title>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </button>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {...res}
            </ul>
        </div>
    );
}
