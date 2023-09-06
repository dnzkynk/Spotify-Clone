import { Icon } from "../../images/icons/Icons";

export default function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="text-black h-10 w-12 flex items-center justify-center absolute top-0 left-0 "
      >
        <Icon name="search" size="24" />
      </label>
      <input
        type="text"
        id="search-input"
        className="h-10 bg-white rounded-3xl pl-12 outline-none text-black text-sm w-[22.750rem] max-w-full"
        placeholder="Ne dinlemek istiyorsun?"
      />
    </div>
  );
}
