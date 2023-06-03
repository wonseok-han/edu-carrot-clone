import type { NextPage } from "next";

const Tailwind: NextPage = () => {
  return (
    <div className="grid grid-flow-row gap-10 dark xl:place-content-center xl:grid-cols-3 lg:grid-cols-2 ">
      <div className="flex flex-col justify-between dark:bg-black bg-white p-10 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl dark:text-white">
          Select Item
        </span>
        <ul>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 pl-1 pr-1 odd:bg-blue-50 even:bg-yellow-200"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        {["a", "", "c", ""].map((char, index) => (
          <li className="bg-red-500 py-2 empty:hidden" key={index}>
            {char}
          </li>
        ))}
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 bg-blue-500 dark:bg-black dark:border-white dark:border dark:hover:bg-white text-white p-3 text-center rounded-xl w-1/2 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500">
            Checkout
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
        <div className="p-6 pb-14 portrait:bg-indigo-600 landscape:bg-teal-500  xl:pb-52">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-400 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-400">미국</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex justify-between items-center mb-5">
          <button>⬅️</button>
          <div className="space-x-3">
            <button>⭐</button>
            <span>4.9</span>
            <button className="p-2 rounded-md">❤️</button>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center px-8 py-2 text-white text-xs rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailwind;
