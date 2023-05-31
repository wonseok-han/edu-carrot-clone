import { NextPage } from "next";

const Details: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:text-white open:bg-blue-400">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span>김치</span>
      </details>
      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className="file:cursor-pointer file:hover:text-purple-400  file:hover:bg-white file:hover:border file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
      />
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400 first-line:hover:text-red-400">
        text text
      </p>
    </div>
  );
};

export default Details;
