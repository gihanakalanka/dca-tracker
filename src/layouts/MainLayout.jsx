

function MainLayout() {
    return (<div className="min-h-screen bg-white dark:bg-slate-950 p-5 lg:p-10">
        <header className="">
            <h1 className="dark:text-white text-4xl">Welcome!</h1>
        </header>
        <aside className="w-64 hidden md:flex">

        </aside>
        <main className="mt-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-slate-900 p-5 rounded-lg space-y-5">
                    <h3 className="text-slate-50">Total Investment!</h3>

                    <div className="space-y-5">
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


                    </div>

                </div>
                <div className="bg-slate-900 p-5 rounded-lg">
                    <h3 className="dark:text-white">Portfolio Allocation</h3>

                </div>
                <div className="bg-slate-900 p-5 rounded-lg">
                    <h3 className="dark:text-white">Performance Overview</h3>
                </div>
            </div>

        </main>
    </div>);
}

export default MainLayout;