import { FC, ReactNode } from "react";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <main className="h-screen w-screen font-OpenSans flex flex-col pt-24">
        {children}
      </main>
    </>
  );
};

export default Layout;
