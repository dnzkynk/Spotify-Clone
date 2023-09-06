import { setSideBar } from "../../stores/Player";
import { Icon } from "../../images/icons/Icons";
import { useSelector, useDispatch } from "react-redux";

export default function SidebarCover() {
  const current = useSelector((state: any) => state?.player.current);
  const dispatch = useDispatch();
  return (
    <div className="pt-[100%] relative bg-black group">
      <img
        src={current.image}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        onClick={() => dispatch(setSideBar(false))}
        className="w-6 h-6 rounded-full  top-1 right-1 opacity-0  bg-black group-hover:opacity-60 hover:!opacity-100 rotate-180 hover:scale-[1.06]  flex items-center absolute  justify-center"
      >
        <Icon name="upSide" size="16" />
      </button>
    </div>
  );
}
