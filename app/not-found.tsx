import { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div>
      <div className="grid grid-flow-row gap-20 text-center p-10">
        <h1>404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default Custom404;
