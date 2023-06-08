import { NextPage } from "next";
import Menu from "./menu";

const MENUS = [
  { text: "home", url: "/" },
  { text: "tailwind", url: "pages/tailwind/tour/" },
  { text: "form", url: "pages/form/" },
  { text: "details", url: "pages/details/" },
  { text: "enter", url: "pages/tailwind/enter/" },
  { text: "items", url: "pages/tailwind/items/" },
  { text: "community", url: "pages/tailwind/community/" },
];

const Header: NextPage = () => {
  return (
    <div>
      <div className="grid grid-flow-col bg-slate-400">
        {MENUS.map((menu, index) => (
          <Menu key={`${index}-${menu.text}`} text={menu.text} url={menu.url} />
        ))}
      </div>
    </div>
  );
};

export default Header;
