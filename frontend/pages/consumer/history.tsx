import type { NextPage } from "next";
import Seo from "../../components/seo";

const BillingHistory: NextPage = () => {
  const headings = [
    "Year",
    "Month",
    "Consumption",
    "Cost",
    "Payment Status",
    "Payment Date",
  ];

  return (
    <>
      <Seo
        title="Billing History | Consumer | Water Authority"
        description="Water Authority Consumer"
        path="/consumer/history"
      />

      <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
        <h1 className="text-4xl font-Poppins font-medium">
          Welcome Mr. Sumesh
        </h1>

        <div className="w-screen px-10 overflow-hidden font-Poppins">
          <div className="mt-10 flex justify-center gap-x-2 overflow-auto">
            {headings.map((heading, i) => (
              <div
                key={`heading${i}`}
                className="py-4 px-2 bg-gray-300 min-w-[160px] flex flex-col justify-center"
              >
                <div className="rounded-full font-semibold py-3 px-5 bg-white text-lg text-center">
                  {heading}
                </div>
                <div className="h-72">{/* data */}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingHistory;
