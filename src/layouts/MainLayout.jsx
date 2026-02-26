import { Outlet, useMatches } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";

function MainLayout() {

    const matches = useMatches();

    const currentTitle = matches.find((match) => match.handle?.title)?.handle.title;


    return (<div className="min-h-screen bg-white dark:bg-slate-950 p-5 lg:p-10">
        <Aside />
        <Header title={currentTitle} />

        <main className="mt-10">
            <Outlet />
        </main >
    </div >);
}

export default MainLayout;