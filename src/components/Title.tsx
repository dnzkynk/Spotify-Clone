import { NavLink } from "react-router-dom";

export default function Title({
  more = false,
  title,
}: {
  more: boolean;
  title: string;
}) {
  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
        {more && (
          <NavLink
            className={
              "text-xs font-semibold uppercase text-link hover:underline mt-2 tracking-wider"
            }
            to="#"
          >
            SEE ALL
          </NavLink>
        )}
      </header>
    </div>
  );
}
