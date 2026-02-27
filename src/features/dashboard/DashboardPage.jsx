import SummeryCard from "../../components/SummeryCard";
import { MOCK_ASSETS } from "../../data/mockAssets";
import { useQuery } from "@tanstack/react-query";

function DashbaordPage() {

    const holdingAsserts = async () => {
        return MOCK_ASSETS;
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['assets'],
        queryFn: holdingAsserts
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

        </div>

    );
}

export default DashbaordPage;