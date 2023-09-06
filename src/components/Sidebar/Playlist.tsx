export default function Playlist() {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-20">
      <ul>
        {new Array(40).fill(null).map((_, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              Çalma Listesi {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
