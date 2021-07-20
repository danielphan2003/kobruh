import type { FunctionalComponent } from "preact";

import { h } from "preact";

type Props = {
  title: string;
  id: string;
}

const Menu: FunctionalComponent<Props> = ({ title, id }) => {
  return (
    <a href={`https://api.thvli.vn/backend/cm/page/${id}`}>
      <button
        className="w-15 h-15 rounded-md duration-400 ease-in-out bg-indigo-500 text-white font-semibold items-center justify-center py-3 px-6 hover:ease-linear shadow-xl transition hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
        {title}
      </button>
    </a>
  );
};

export default Menu;