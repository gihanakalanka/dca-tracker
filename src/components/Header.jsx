import { NavLink } from "react-router-dom";

function Header({ title }) {

    return (
        <header className="flex justify-between item-center">
            <h1 className="dark:text-white text-4xl">{title}</h1>
            <nav className="space-x-5">
                <NavLink to="/"
                    className={({ isActive }) => `hover:text-amber-400 ${isActive ? "text-amber-400" : "text-slate-50"}`}>
                    Dashboard
                </NavLink>
                <NavLink to="/portfolio" className={({ isActive }) => `hover:text-amber-400 ${isActive ? "text-amber-400" : "text-slate-50"}`}>Portfolio</NavLink>
            </nav>
        </header >
    );
}

export default Header;