import { NavLink } from "react-router-dom";
import { Icon } from "../../images/icons/Icons";

export default function Menu() {
  return (
    <div className="px-2">
      <ul>
        <li>
          <NavLink
            to="/"
            className="flex items-center gap-x-4 h-10 text-sm font-semibold text-link rounded hover:text-white hover:bg-active px-4"
          >
            <span>
              <Icon name="home" />
            </span>
            Ana Sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className="flex items-center h-10 gap-x-4 text-sm font-semibold text-link rounded hover:text-white hover:bg-active px-4"
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/library"
            className="flex items-center gap-x-4 h-10 text-sm font-semibold text-link rounded hover:text-white hover:bg-active px-4"
          >
            <span>
              <Icon name="library" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
