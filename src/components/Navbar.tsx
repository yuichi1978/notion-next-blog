import Link from "next/link";
import { siteConfig } from "../../site.config";
import Breadcrumb from "./Breadcrumb";

const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3  text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div
          className="flex justify-between items-center bg-grey-light rounded-md w-full"
          aria-label="breadcrumb"
        >
          <Link href="/" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 text-2xl md:text-3xl">
              {siteConfig.siteTitle}
            </a>
          </Link>
          <div>
            <ul className="flex gap-3">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-600">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-600">twitter</a>
                </Link>
              </li>
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-600">github</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Breadcrumb */}
          {/* <Breadcrumb /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
