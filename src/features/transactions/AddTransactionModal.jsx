
function AddTransactionModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Add Transaction</h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Asset</label>
                        <input type="text" placeholder="e.g. BTC" className="w-full rounded-lg border border-slate-800 bg-slate-950 p-3 text-white focus:border-emerald-500 outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Amount</label>
                            <input type="number" className="w-full rounded-lg border border-slate-800 bg-slate-950 p-3 text-white outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Price</label>
                            <input type="number" className="w-full rounded-lg border border-slate-800 bg-slate-950 p-3 text-white outline-none" />
                        </div>
                    </div>

                    <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-900/20">
                        Save Transaction
                    </button>
                </form>
            </div>
        </div>
    );


}

export default AddTransactionModal;

