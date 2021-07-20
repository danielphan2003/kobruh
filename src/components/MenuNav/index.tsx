import type { FunctionalComponent } from "preact";
import type { IMenu } from "../../utils/thvli/types";

import { h } from "preact";
import Menu from "./Menu";

type Props = {
  menus: IMenu[],
};

const MenuNav: FunctionalComponent<Props> = ({ menus }) => {
  return (
    <div className="bg-yellow-50 font-medium font-mono flex">
      {menus.map((menu) => (
        <div className="flex-1 p-5 content-evenly">
          <Menu id={menu.id} title={menu.name} />
        </div>
      ))}
    </div>
  );
};

export default MenuNav;