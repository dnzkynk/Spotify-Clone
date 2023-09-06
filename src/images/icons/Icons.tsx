type IconComponents = {
  [key: string]: ({ size }: { size: string }) => JSX.Element;
};

const HomeIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      fill="currentColor"
      aria-hidden="true"
      className="Svg-sc-ytk21e-0 haNxPq home-active-icon "
      viewBox="0 0 24 24"
      data-encore-id="icon"
    >
      <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
    </svg>
  );
};

const SearchIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      fill="currentColor"
      aria-hidden="true"
      className="Svg-sc-ytk21e-0 haNxPq search-icon"
      viewBox="0 0 24 24"
      data-encore-id="icon"
    >
      <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
    </svg>
  );
};

const LibraryIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
    >
      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
    </svg>
  );
};

const Logo = () => {
  return (
    <>
      <svg
        role="img"
        height="40"
        width="133"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="74.428 1369.145 9772.44 2931.018"
      >
        <path
          fill="#2EBD59"
          d="M1539.928 1369.145c-809.356 0-1465.5 656.126-1465.5 1465.482 0 809.443 656.144 1465.535 1465.5 1465.535 809.392 0 1465.5-656.091 1465.5-1465.535 0-809.304-656.074-1465.412-1465.518-1465.412l.018-.07zm672.069 2113.646c-26.32 43.173-82.565 56.7-125.598 30.397-344.137-210.332-777.297-257.845-1287.421-141.312-49.157 11.271-98.157-19.547-109.356-68.688-11.253-49.157 19.424-98.157 68.704-109.356 558.249-127.628 1037.101-72.695 1423.378 163.344 43.05 26.426 56.699 82.601 30.275 125.65l.018-.035zm179.374-398.981c-33.145 53.777-103.46 70.647-157.167 37.624-393.837-242.094-994.384-312.217-1460.32-170.781-60.428 18.252-124.25-15.803-142.59-76.125-18.2-60.428 15.873-124.128 76.195-142.503 532.227-161.489 1193.865-83.265 1646.239 194.723 53.726 33.075 70.7 103.425 37.625 157.079l.018-.017zm15.4-415.52c-472.395-280.542-1251.599-306.337-1702.556-169.47-72.414 21.962-148.994-18.918-170.939-91.333-21.945-72.449 18.9-148.977 91.367-170.992 517.667-157.149 1378.229-126.787 1922.022 196.035 65.135 38.657 86.503 122.779 47.897 187.827-38.5 65.135-122.85 86.607-187.774 47.933h-.017zM4061.569 2722.05c-253.033-60.34-298.078-102.689-298.078-191.678 0-84.069 79.152-140.646 196.857-140.646 114.1 0 227.237 42.962 345.852 131.407 3.588 2.678 8.086 3.744 12.513 3.045 4.428-.665 8.348-3.098 10.938-6.755l123.55-174.16c5.075-7.175 3.692-17.062-3.15-22.54-141.172-113.277-300.142-168.35-485.956-168.35-273.21 0-464.047 163.957-464.047 398.545 0 251.562 164.622 340.637 449.102 409.394 242.13 55.772 282.993 102.498 282.993 186.025 0 92.557-82.636 150.097-215.618 150.097-147.699 0-268.169-49.752-402.937-166.46-3.342-2.888-7.928-4.199-12.162-3.954-4.463.367-8.541 2.432-11.375 5.845l-138.53 164.867c-5.81 6.842-5.075 17.062 1.646 22.978 156.799 139.982 349.648 213.92 557.759 213.92 294.401 0 484.644-160.86 484.644-409.832.525-210.175-125.299-326.55-433.474-401.52l-.527-.228zM5161.617 2472.5c-127.609 0-232.277 50.26-318.587 153.247v-115.92c0-9.152-7.42-16.607-16.555-16.607h-226.572c-9.152 0-16.555 7.455-16.555 16.607V3797.86c0 9.152 7.402 16.607 16.555 16.607h226.572c9.135 0 16.555-7.454 16.555-16.607v-406.577c86.328 96.88 191.013 144.218 318.587 144.218 237.107 0 477.138-182.524 477.138-531.439.35-349.002-239.75-531.579-476.875-531.579l-.263.017zm213.675 531.562c0 177.678-109.445 301.665-266.158 301.665-154.926 0-271.791-129.623-271.791-301.665 0-172.024 116.865-301.664 271.791-301.664 154.176-.018 266.176 126.822 266.176 301.646l-.018.018zM6253.966 2472.5c-305.357 0-544.582 235.13-544.582 535.359 0 296.957 237.58 529.619 540.837 529.619 306.442 0 546.401-234.342 546.401-533.417 0-298.042-238.35-531.526-542.674-531.526l.018-.035zm0 834.994c-162.418 0-284.865-130.498-284.865-303.52 0-173.758 118.213-299.845 281.119-299.845 163.468 0 286.737 130.497 286.737 303.642 0 173.723-118.999 299.723-282.975 299.723h-.016zM7448.688 2493.221h-249.322v-254.905c0-9.135-7.385-16.59-16.537-16.59h-226.537c-9.17 0-16.607 7.455-16.607 16.59v254.905h-108.938c-9.117 0-16.503 7.454-16.503 16.607v194.722c0 9.135 7.386 16.607 16.503 16.607h108.938v503.842c0 203.612 101.342 306.845 301.209 306.845 81.271 0 148.697-16.783 212.24-52.815 5.162-2.888 8.364-8.452 8.364-14.367v-185.43c0-5.723-2.976-11.13-7.875-14.122-4.935-3.098-11.077-3.255-16.135-.753-43.646 21.963-85.837 32.095-133 32.095-72.694 0-105.122-33.005-105.122-106.977v-468.229h249.322c9.152 0 16.52-7.455 16.52-16.607v-194.705c.35-9.152-7-16.607-16.274-16.607l-.246-.106zM8317.388 2494.218v-31.308c0-92.103 35.314-133.175 114.52-133.175 47.232 0 85.173 9.38 127.662 23.555 5.233 1.646 10.692.823 14.945-2.31 4.375-3.133 6.843-8.155 6.843-13.475V2146.58c0-7.298-4.69-13.755-11.726-15.908-44.888-13.353-102.322-27.055-188.316-27.055-209.266 0-319.883 117.845-319.883 340.672v47.95h-108.85c-9.135 0-16.625 7.455-16.625 16.59v195.72c0 9.135 7.49 16.607 16.625 16.607h108.85v777.156c0 9.152 7.385 16.607 16.521 16.607h226.572c9.152 0 16.607-7.455 16.607-16.607V2721.21h211.54l324.047 776.964c-36.785 81.637-72.959 97.877-122.342 97.877-39.918 0-81.953-11.918-124.934-35.438-4.042-2.223-8.837-2.59-13.194-1.242-4.323 1.522-7.962 4.742-9.8 8.942l-76.79 168.472c-3.658 7.963-.525 17.309 7.14 21.438 80.167 43.417 152.531 61.949 241.973 61.949 167.299 0 259.77-77.927 341.285-287.577l393.066-1015.698c1.977-5.11 1.383-10.885-1.75-15.417-3.113-4.498-8.137-7.21-13.633-7.21h-235.865c-7.068 0-13.389 4.497-15.697 11.13l-241.621 690.164-264.652-690.619c-2.414-6.423-8.609-10.676-15.469-10.676h-387.101l.052-.051zM7813.738 2493.221h-226.572c-9.153 0-16.607 7.454-16.607 16.607v988.485c0 9.152 7.454 16.607 16.607 16.607h226.572c9.135 0 16.607-7.455 16.607-16.607v-988.416a16.57 16.57 0 0 0-16.626-16.607l.019-.069zM7701.738 2043.139c-89.757 0-162.592 72.659-162.592 162.417 0 89.81 72.853 162.558 162.593 162.558 89.723 0 162.486-72.748 162.486-162.558 0-89.74-72.799-162.417-162.398-162.417h-.089zM9686.585 2811.037c-89.67 0-159.441-72.013-159.441-159.46s70.682-160.282 160.281-160.282c89.672 0 159.443 71.995 159.443 159.372 0 87.448-70.701 160.37-160.299 160.37h.016zm.875-303.887c-81.672 0-143.465 64.925-143.465 144.427 0 79.468 61.355 143.518 142.643 143.518 81.654 0 143.518-64.872 143.518-144.428 0-79.467-61.426-143.517-142.625-143.517h-.071zm35.352 159.914l45.098 63.141h-38.027l-40.602-57.925h-34.91v57.925h-31.832v-167.37h74.637c38.885 0 64.453 19.897 64.453 53.393.174 27.44-15.75 44.205-38.676 50.837h-.141zm-26.95-75.511h-41.512v52.938h41.512c20.719 0 33.09-10.133 33.09-26.495 0-17.22-12.424-26.442-33.074-26.442h-.016z"
        />
      </svg>
    </>
  );
};
const PlusIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
    >
      <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
    </svg>
  );
};

const DownloadIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq mt-1"
      fill="currentColor"
    >
      <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
    </svg>
  );
};

const PrevIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      className="Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      fill="currentColor"
    >
      <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
    </svg>
  );
};

const NextIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      className="Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      fill="currentColor"
    >
      <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
    </svg>
  );
};

const PauseIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg>
  );
};
const PlayIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>
  );
};
const PlayerPrevIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
    </svg>
  );
};
const PlayerNextIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
    </svg>
  );
};

const ShuffleIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
      <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
    </svg>
  );
};

const RepeatIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
      <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
    </svg>
  );
};

const QueueIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
    </svg>
  );
};

const DeviceIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="presentation"
      height={size}
      width={size}
      aria-hidden="true"
      className="Svg-sc-ytk21e-0 haNxPq"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      fill="currentColor"
    >
      <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
      <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  );
};

const FullscreanIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path>
    </svg>
  );
};

const HeartIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
    </svg>
  );
};

const PictureInPictureIcon = ({ size }: { size: string }) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor" fill-rule="evenodd">
        <path
          d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
          fill-rule="nonzero"
        ></path>
        <path d="M10 8h4v3h-4z"></path>
      </g>
    </svg>
  );
};

const VolumeMutedtIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="presentation"
      height={size}
      width={size}
      aria-hidden="true"
      aria-label="Ses kapalı"
      id="volume-icon"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
      <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
    </svg>
  );
};

const VolumeLowIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="presentation"
      height={size}
      width={size}
      aria-hidden="true"
      aria-label="Ses seviyesi düşük"
      id="volume-icon"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    </svg>
  );
};

const VolumeNormalIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="presentation"
      height={size}
      width={size}
      aria-hidden="true"
      aria-label="Ses seviyesi orta"
      id="volume-icon"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
    </svg>
  );
};

const VolumeFullIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="presentation"
      height={size}
      width={size}
      aria-hidden="true"
      aria-label="Ses seviyesi yüksek"
      id="volume-icon"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
      <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
    </svg>
  );
};

const LyricsIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M11.196 8 6 5v6l5.196-3z"></path>
      <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path>
    </svg>
  );
};

const UpSideIcon = ({ size }: { size: string }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
      fill="currentColor"
    >
      <path d="M.47 11.03a.75.75 0 0 0 1.06 0L8 4.56l6.47 6.47a.75.75 0 1 0 1.06-1.06L8 2.44.47 9.97a.75.75 0 0 0 0 1.06z"></path>
    </svg>
  );
};

const icons: IconComponents = {
  home: HomeIcon,
  search: SearchIcon,
  library: LibraryIcon,
  Logo: Logo,
  plus: PlusIcon,
  download: DownloadIcon,
  prev: PrevIcon,
  next: NextIcon,
  pause: PauseIcon,
  playerPrev: PlayerPrevIcon,
  playerNext: PlayerNextIcon,
  shuffle: ShuffleIcon,
  repeat: RepeatIcon,
  queue: QueueIcon,
  device: DeviceIcon,
  fullscrean: FullscreanIcon,
  heart: HeartIcon,
  pictureInPicture: PictureInPictureIcon,
  volumeMuted: VolumeMutedtIcon,
  volumeLow: VolumeLowIcon,
  volumeNormal: VolumeNormalIcon,
  volumeFull: VolumeFullIcon,
  lyrics: LyricsIcon,
  play: PlayIcon,
  upSide: UpSideIcon,
};

const Icon = ({ name, size = "24" }: { name: string; size?: string }) => {
  const Component = icons[name];

  return <Component size={size} />;
};

export { Icon };
