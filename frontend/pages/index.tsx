import type { NextPage } from "next";
import Link from "next/link";
import Seo from "../components/seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Water Authority" description="Water Authority" path="/consumer/login" />

      <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
        <Link href={"/consumer/dashboard"}>
          <a className="rounded-full bg-black text-white text-center font-semibold py-3 w-56">
            Consumer
          </a>
        </Link>

        <Link href={"/admin"}>
          <a className="mt-5 rounded-full bg-black text-white text-center font-semibold py-3 w-56">
            Admin
          </a>
        </Link>

        <Link href={"/admin"}>
          <a className="mt-5 rounded-full bg-black text-white text-center font-semibold py-3 w-56">
            XYZ
          </a>
        </Link>
      </div>
    </>
  );
};

export default Home;
