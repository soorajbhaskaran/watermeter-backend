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
        title="Update Water Cost | Admin | Water Authority"
        description="Admin Page Water Authority"
        path="/admin/update"
      />

      <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
        <h1 className="text-3xl font-Poppins font-medium">
          Enter the cost of 1000L of water
        </h1>

        <form>
          <div className="mt-10 text-5xl w-full flex justify-center items-center max-w-xs rounded-full border bg-gray-300 py-1 px-10">
            <span className="font-sans">₹</span>
            <input
              type="number"
              className="focus:outline-none placeholder:text-gray-500 bg-gray-300 block w-1/2"
              placeholder="Cost"
            />
            <span className="opacity-0 pointer-events-none">₹</span>
          </div>

          <div className="mt-10 flex justify-center font-Poppins font-semibold">
            <button
              type="submit"
              className="rounded-full bg-black text-white text-center font-semibold py-3 w-36"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin;
