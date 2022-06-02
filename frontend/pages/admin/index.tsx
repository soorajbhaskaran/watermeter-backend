import type { NextPage } from "next";
import Image from "next/image";
import Seo from "../../components/seo";

const Admin: NextPage = () => {
  const headings = [
    "Co No.",
    "Name",
    "Phone",
    "Current Consumption",
    "Cost",
    "Due/Paid/Unpaid",
  ];

  

  return (
    <>
      <Seo
        title="Admin | Water Authority"
        description="Admin Page Water Authority"
        path="/admin"
      />

      <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
        <div className="w-full flex max-w-2xl rounded-full border border-black py-3 px-5">
          <input
            className="focus:outline-none placeholder:text-black block flex-grow"
            placeholder="Search by consumer number"
          />
          <Image
            src="/vectors/search.svg"
            alt="search"
            height={20}
            width={20}
          />
        </div>

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

export default Admin;
