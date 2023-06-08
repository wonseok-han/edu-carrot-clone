import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <textarea
        rows={4}
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        placeholder="Ask a question!"
      />
      <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border-r-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Submit
      </button>
    </div>
  );
};

export default Write;
