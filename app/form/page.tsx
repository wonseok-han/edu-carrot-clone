import type { NextPage } from "next";

const Form: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
      <input
        type="text"
        required
        placeholder="UserName"
        className="border p-1 border-gray-400 rounded-lg invalid:bg-red-500 placeholder-shown:bg-teal-500 placeholder:text-red-500"
      />
      <input
        type="password"
        required
        placeholder="Password"
        className="border p-1 border-gray-400 rounded-lg peer"
      />
      <span className="hidden peer-invalid:text-red-500 peer-invalid:block">
        This input is invalid
      </span>
      <span className="hidden peer-valid:text-teal-500 peer-valid:block">
        Awesome Password
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Form;
