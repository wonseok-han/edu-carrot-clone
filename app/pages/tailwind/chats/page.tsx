import Layout from "@/components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar>
      <div className="py-10 divide-y-[1px]">
        {[0, 1, 2, 3, 4, 5].map((_, i) => (
          <Link key={i} href={`pages/tailwind/chats/${i}`}>
            <div className="flex px-4 cursor-pointer py-3 items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-xs font-medium text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
