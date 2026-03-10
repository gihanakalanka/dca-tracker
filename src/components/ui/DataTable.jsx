import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

export function DataTable({ data, columns }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });


    return (
        <div className="rounded-xl border border-slate-88 bg-slate-900/50 overflow-hidden mb-8">
            <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800/40">
                    {table.getHeaderGroups().map(group => (
                        <tr key={group.id}>
                            {table.getHeaderGroups().map(group => (
                                group.headers.map(header => (
                                    <th key={header.id} className="px-6 py-4 text-xs font-semibold uppercase text-slate-400 border-b border-slate-800">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="hover:bg-slate-800/30 transition-colors">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="px-6 py-4 text-sm text-slate-300 border-b border-slate-800/50">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}