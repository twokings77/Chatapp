import "./nav.css";
import { IoCalendarOutline, IoChatbubblesOutline,IoCallOutline,IoSettingsOutline } from "react-icons/io5";


const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="navItem">
          {" "}
          {/* <img className="navIcons cursor-pointer hover:bg-base-200" src="/calendar.svg" alt="calendar Icon" /> */}
          <IoCalendarOutline className="navIcons cursor-pointer hover:bg-base-200 rounded-lg 	" size={40} />
          <span className="icon-label">Calendar</span>
        </div>
        <div className="navItem">
        <IoChatbubblesOutline className="navIcons cursor-pointer hover:bg-base-200 rounded-lg 	" size={40} />

          <span className="icon-label">Chat</span>
        </div>
        <div className="navItem">
          {" "}
          <IoCallOutline className="navIcons cursor-pointer hover:bg-base-200 rounded-lg 	" size={40} />
          <span className="icon-label">Calls</span>
        </div>
        <div className="navItem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-30"
            className="navIcons cursor-pointer hover:bg-base-200 rounded-lg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
          <span className="icon-label">Groups</span>
        </div>
        <div className="navItem">
          {" "}
          <IoSettingsOutline className="navIcons cursor-pointer hover:bg-base-200 rounded-lg 	" size={40} />
          <span className="icon-label">Settings</span>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
