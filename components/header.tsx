import { NextPage } from "next";
import Menu from "./menu";

const MENUS = [
  { text: "carrot", url: "/" },
  { text: "tailwind", url: "pages/tailwind/tour/" },
  { text: "form", url: "pages/form/" },
  { text: "details", url: "pages/details/" },
];

const Header: NextPage = () => {
  return (
    <div>
      <div className="grid grid-flow-col">
        {MENUS.map((menu, index) => (
          <Menu key={`${index}-${menu.text}`} text={menu.text} url={menu.url} />
        ))}
      </div>
    </div>
  );
};

export default Header;
