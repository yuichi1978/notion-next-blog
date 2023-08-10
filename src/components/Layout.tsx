import { FC } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { LayoutProps } from "../types/types";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col max-w-2xl items-center w-full mx-auto">
        <Navbar />

        <main className="w-full pb-12 pt-7 px-4">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
