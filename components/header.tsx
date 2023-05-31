import { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <div>
      <div className="grid grid-flow-col bg-slate-400">
        <Link
          href="/"
          className="bg-blue-500 p-2 m-1 rounded-xl text-center hover:bg-teal-500 hover:text-white"
        >
          home
        </Link>
        <Link
          href="pages/tailwind/"
          className="bg-blue-500 p-2 m-1 rounded-xl text-center hover:bg-teal-500 hover:text-white"
        >
          tailwind
        </Link>
        <Link
          href="pages/form/"
          className="bg-blue-500 p-2 m-1 rounded-xl text-center hover:bg-teal-500 hover:text-white"
        >
          form
        </Link>
        <Link
          href="pages/details/"
          className="bg-blue-500 p-2 m-1 rounded-xl text-center hover:bg-teal-500 hover:text-white"
        >
          details
        </Link>
      </div>
    </div>
  );
};

export default Header;
