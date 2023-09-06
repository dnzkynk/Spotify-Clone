import { NavLink } from "react-router-dom";
import Menu from "./Sidebar/Menu";
import { Icon } from "../images/icons/Icons";
import { BiSolidHeart } from "react-icons/bi";
import Playlist from "./Sidebar/Playlist";
import DownloadApp from "./Sidebar/DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

export default function Sidebar() {
  const sidebar = useSelector((state: any) => state?.player.sidebar);
  return (
    <div className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <NavLink to={"/"} className="mb-7 px-6">
        <Icon name="Logo" />
      </NavLink>
      <Menu />
      <nav>
        <ul className="mt-4 text-sm text-link font-semibold items-center">
          <li>
            <NavLink
              to={"/"}
              className={"py-2 px-6 flex group hover:text-white"}
            >
              <span className="w-8 h-8 flex items-center justify-center mr-4 bg-white rounded-sm bg-opacity-60 group-hover:bg-opacity-100 text-black ">
                <Icon name="plus" size="16" />
              </span>
              Çalma Listesi Oluştur
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={"py-2 px-6 flex hover:text-white group items-center"}
            >
              <span className="w-8 h-8 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-60 group-hover:opacity-100">
                <BiSolidHeart size="16" />
              </span>
              Beğenilen Şarkılar
            </NavLink>
          </li>
        </ul>
      </nav>
      <Playlist />
      <DownloadApp />

      {sidebar && <SidebarCover />}
    </div>
  );
}
