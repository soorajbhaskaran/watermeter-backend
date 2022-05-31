import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Seo from "../../components/seo";

const ConsumerHome: NextPage = () => {
  const [screen, setScreen] = useState(0);

  return (
    <>
      <Seo
        title="Consumer | Water Authority"
        description="Water Authority Consumer"
        path="/consumer"
      />

      <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
        <h1 className="text-4xl font-Poppins font-medium">
          Welcome Mr. Sumesh
        </h1>

        <div className="w-full mt-10 p-10 bg-gray-300 rounded">
          <div className="font-Poppins flex justify-center text-lg gap-x-5">
            <button
              className={`rounded-full border-black font-semibold py-3 px-2 w-56 ${
                screen === 0 ? "bg-white" : "border"
              }`}
              onClick={() => {
                setScreen(0);
              }}
            >
              Bill Due
            </button>
            <button
              className={`rounded-full border-black font-semibold py-3 px-2 w-56 ${
                screen === 1 ? "bg-white" : "border"
              }`}
              onClick={() => {
                setScreen(1);
              }}
            >
              Present Consumption
            </button>
          </div>

          <div className="mt-10 text-center font-Poppins">
            {screen === 0 ? (
              <div className="flex flex-col items-center">
                <h2 className="text-xl max-w-md">
                  You have to pay outstanding amount for the month of May
                </h2>

                <h3 className="text-5xl mt-5 font-medium">
                  <span className="font-sans">₹</span>150
                </h3>

                <button className="rounded-full mt-10 bg-black text-white text-lg font-bold py-3 w-56">
                  Pay Now
                </button>
              </div>
            ) : (
              <></>
            )}

            {screen === 1 ? (
              <div className="flex flex-col items-center">
                <h2 className="text-xl">
                  Your current water consumption for the Month
                </h2>
                <h2 className="text-xl">
                  (Last updated on 12:00 pm IST, 12/05/22)
                </h2>

                <h3 className="text-5xl mt-3 font-medium">1000L</h3>

                <h2 className="text-xl mt-10">Which translates to</h2>

                <h3 className="text-5xl mt-3 font-medium">
                  <span className="font-sans">₹</span>150
                </h3>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsumerHome;
