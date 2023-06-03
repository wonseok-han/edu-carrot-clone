import { NextPage } from "next";
import Link from "next/link";

interface MenuPros {
  text: string;
  url: string;
}

const Menu: NextPage<MenuPros> = ({ text, url }: MenuPros) => {
  return (
    <Link
      href={url}
      className="bg-blue-500 p-2 m-1 rounded-xl text-center hover:bg-teal-500 hover:text-white"
    >
      {text}
    </Link>
  );
};

export default Menu;
