import { NavLink } from "react-router-dom";

function Header({ title }) {
    return (
        <header className="">
            <h1 className="dark:text-white text-4xl">{title}</h1>
            <nav>
                <NavLink to="/" className="text-slate-50">Dashbaord</NavLink>
                <NavLink to="/portfolio" className="text-slate-50">Portfolio</NavLink>
            </nav>
        </header>
    );
}

export default Header;