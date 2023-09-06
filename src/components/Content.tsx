import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../views/Home";
import Serach from "../views/Search";
import Library from "../views/Library";

export default function Content() {
  return (
    <div className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Serach />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </div>
  );
}
