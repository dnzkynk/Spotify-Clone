import { useLocation } from "react-router-dom";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";
import Search from "./Navbar/Search";

export default function Navbar() {
  let search = false;
  const location = useLocation();
  if (location.pathname === "/search") {
    search = true;
  }
  return (
    <nav className="h-[3.75] flex items-center justify-between px-8 mt-4">
      <Navigation />
      {search && <Search />}
      <Auth />
    </nav>
  );
}
