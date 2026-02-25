import Aside from "../components/Aside";
import Header from "../components/Header";
import SummeryCard from "../components/SummeryCard";

function MainLayout() {
    return (<div className="min-h-screen bg-white dark:bg-slate-950 p-5 lg:p-10">
        <Aside />
        <Header title="Welcome!" />

        <main className="mt-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <SummeryCard title="Total Investment!">
                    <div className="flex justify-between">
                        <span className="text-slate-50">Total Invested</span>
                        <span className="text-slate-50 font-bold text-1xl">$1.00</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-slate-50">Current Value</span>
                        <span className="text-slate-50 font-bold text-1xl">$1.00</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-slate-50">Total P/L ($ + %)</span>
                        <div className="flex flex-col items-end space-y-1">
                            <span className="text-slate-50 font-bold text-2xl">$1.00</span>
                            <span class="text-slate-400">34.07%</span>
                        </div>

                    </div>
                </SummeryCard>

                <SummeryCard title="Portfolio Allocation">

                </SummeryCard>


                <SummeryCard title="Performance Overview">

                </SummeryCard>
            </div>

        </main >
    </div >);
}

export default MainLayout;