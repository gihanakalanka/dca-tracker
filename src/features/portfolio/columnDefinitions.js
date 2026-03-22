import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const transactionColumns = [
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