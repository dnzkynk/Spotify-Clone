import { Icon } from "../../images/icons/Icons";

export default function DownloadApp() {
  return (
    <a
      href="#"
      className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-2 items-center px-6 mt-1"
    >
      <Icon name="download" size="20" />
      Uygulamayı Yükle
    </a>
  );
}
