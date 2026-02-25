
function SummeryCard({ title, children }) {
    return (

        <div className="bg-slate-900 p-5 rounded-lg space-y-5">
            <h3 className="text-slate-50">{title}</h3>

            <div className="space-y-5">
                {children}
            </div>
        </div>
    );
}

export default SummeryCard;