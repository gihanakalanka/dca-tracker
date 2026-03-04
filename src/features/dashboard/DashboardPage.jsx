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
            <section>
                <table className="text-white">
                    <thead>
                        {table.getHeaderGroups().map(group => (
                            <tr key={group.id}>
                                {group.headers.map(header => (
                                    <th key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (

                                    <td id={cell.id}>
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