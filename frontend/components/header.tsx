import Image from "next/image";
import Link from "next/link";
import { FC, useContext, useEffect, useState } from "react";

const Header: FC = () => {
  return (
    <header className="fixed z-50 font-Roboto top-0 w-full bg-white py-5 px-5 md:px-10 lg:px-20 rounded-b-lg shadow-lg">
      <div className="w-full text-center">
        <Link href={"/"}>
          <a className="block">
            <Image src="/logo.svg" alt="logo" width={200} height={50} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
