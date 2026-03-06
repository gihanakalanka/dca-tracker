import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import SummeryCard from "../../components/SummeryCard";
import { MOCK_TRANSACTIONS } from "../../data/mockTransactions";
import { useMemo } from "react";


function DashbaordPage() {

    const data = useMemo(() => MOCK_TRANSACTIONS, []);
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("date", {
            header: "Date",
            cell: (info) => (info.getValue())
        }), columnHelper.accessor("assetSymbol", {
            header: "Coin",
            cell: (info) => (info.getValue())
        }),
        columnHelper.accessor("priceAtTime", {
            header: "Entry Price",
            cell: (info) => (info.getValue())
        }),
        columnHelper.accessor("totalCost", {
            header: "Total Cost",
            cell: (info) => (info.getValue())
        }),
        columnHelper.accessor("amount", {
            header: "Amount",
            cell: (info) => (info.getValue())
        }),
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });


    return (
        <div >

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
                <h2 className="text-slate-50 text-xl">Transactions History</h2>
                <table className="w-full text-left table-auto md:table-fixed text-white border-collapse border-separate border-spacing-0">
                    <thead className="bg-slate-800/40">
                        {table.getHeaderGroups().map(group => (
                            <tr key={group.id}>
                                {group.headers.map(header => (
                                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider  border-b border-slate-800" key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody className="divide-y divide-slate-800">
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}
                                className="group hover:bg-slate-800/40 transition-all duration-200">
                                {row.getVisibleCells().map(cell => (

                                    <td className="px-5 py-4 text-sm text-slate-300 border-b border-slate-800" key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </div>

    );
}

export default DashbaordPage;