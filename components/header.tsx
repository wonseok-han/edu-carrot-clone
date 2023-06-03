import { NextPage } from "next";
import Menu from "./menu";

const MENUS = [
  { text: "home", url: "/" },
  { text: "tailwind", url: "pages/tailwind/" },
  { text: "form", url: "pages/form/" },
  { text: "details", url: "pages/details/" },
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
