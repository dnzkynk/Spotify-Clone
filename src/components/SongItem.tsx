import { NavLink } from "react-router-dom";
import { Items } from "./BoxSection";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../stores/Player";
import { Icon } from "../images/icons/Icons";

export default function SongItem({ item }: { item: Items }) {
  const dispatch = useDispatch();

  const { current, playing, controls } = useSelector(
    (state: any) => state?.player
  );

  const [buttonSize, setButtonSize] = useState("w-10 h-10");
  const [iconSize, setIconSize] = useState("w-6 h-6");

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setButtonSize("w-10 h-10");
        setIconSize("16");
      } else if (screenWidth >= 1024) {
        setButtonSize("w-8 h-8");
        setIconSize("14");
      } else if (screenWidth >= 768) {
        setButtonSize("w-6 h-6");
        setIconSize("12");
      } else {
        setButtonSize("w-4 h-4");
        setIconSize("10");
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ImageStyle = (item: { type: string }) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";
      default:
        return "rounded";
    }
  };

  const updateCurrent = () => {
    if (current?.id === item.id) {
      if (playing) {
        controls?.pause();
      } else {
        controls?.play();
      }
    }
    dispatch(setCurrent(item));
  };

  const isCurrentItem = current?.id === item.id && playing;

  return (
    <NavLink
      key={item.id}
      to="#"
      className={"bg-footer p-4 rounded hover:bg-active group "}
    >
      <div className="pt-[100%] relative mb-4 ">
        <img
          src={item.image}
          className={`absolute inset-0 w-full object-cover h-full ${ImageStyle(
            item
          )}`}
        />
        <button
          onClick={updateCurrent}
          className={`rounded-full bg-primary absolute bottom-2 right-2 group-hover:flex group-focus:flex  items-center justify-center text-black ${buttonSize} hover:bg-primary ${
            !isCurrentItem ? "hidden" : "flex"
          }`}
        >
          <Icon name={isCurrentItem ? "pause" : "play"} size={iconSize} />
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="text-xs text-link mt-1">{item.singer}</p>
    </NavLink>
  );
}
