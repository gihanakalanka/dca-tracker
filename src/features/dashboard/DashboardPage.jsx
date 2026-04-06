import SummeryCard from "../../components/SummeryCard";
import { MOCK_TRANSACTIONS } from "../../data/mockTransactions";
import { transactionColumns, portfolioColumns } from "../portfolio/columnDefinitions";
import { DataTable } from "../../components/ui/DataTable";
import { MOCK_ASSETS } from "../../data/mockAssets";
import AddTransactionModal from "../transactions/AddTransactionModal";
import { useState } from "react";

function DashbaordPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div >
            <section className="mt-15 mb-15 flex flex-col gap-5">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="self-start bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" >Add Transaction</button>

                <AddTransactionModal isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)} />

            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                            <span className="text-slate-400">34.07%</span>
                        </div>

                    </div>
                </SummeryCard>

                <SummeryCard title="Portfolio Allocation">

                </SummeryCard>


                <SummeryCard title="Performance Overview">

                </SummeryCard>
            </section>
            <section className="mt-15 flex flex-col gap-5">
                <h2 className="text-slate-50 text-xl">Recent Transactions</h2>
                <DataTable data={MOCK_TRANSACTIONS} columns={transactionColumns} />
            </section>


            <section className="mt-15 flex flex-col gap-5">
                <h2 className="text-slate-50 text-xl">Top Holdings</h2>
                <DataTable data={MOCK_ASSETS} columns={portfolioColumns} />
            </section>

        </div>

    );
}

export default DashbaordPage;