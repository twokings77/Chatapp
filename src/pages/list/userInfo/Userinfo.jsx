import { useState, useEffect, useRef } from "react";
import "./userinfo.css";
import {
  IoFilterOutline,
  IoCreateOutline,
  IoEllipsisHorizontalOutline,
} from "react-icons/io5";
import { useUserStore } from "../../../library/userStore";
import { auth } from "../../../library/firebase";

const Userinfo = () => {
  const { currentUser } = useUserStore();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    return () => {
      // Unbind the event listener on cleanup
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="Userinfo">
      <div className="avatarAndName">
        <div className="avatar placeholder">
          {/* Display user avatar if it exists, otherwise show placeholder */}
          {currentUser?.avatar ? (
            <img
              src={currentUser.avatar}
              alt="User Avatar"
              className="bg-neutral text-neutral-content  rounded-full object-cover"
            />
          ) : (
            <div className="bg-neutral  text-neutral-content w-10 h-10 rounded-full flex items-center justify-center">
            </div>
          )}
         
        </div>
        <div> <h2>{currentUser?.username || "Username"}</h2></div>
      </div>
      <div className="icons flex space-x-2">
        <div
          className="actionIcons text-3xl md:text-2xl sm:text-xl relative"
          ref={dropdownRef}
        >
          <IoEllipsisHorizontalOutline size={15} onClick={toggleDropdown} />
          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="dropdownMenu absolute left-0 mt-2 w-32 shadow-md rounded-md z-10">
              <ul className="flex flex-col menu dropdown-content bg-base-100 rounded-box z-[1] w-51 p-2 shadow">
                <li className="p-2 hover:bg-primary cursor-pointer">
                  Action 1
                </li>
                <li className="p-2 hover:bg-primary cursor-pointer">
                  Action 2
                </li>
                <li className="p-2 hover:bg-primary cursor-pointer text-orange-600" onClick={()=>auth.signOut()}>
                  Log out
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="actionIcons text-3xl md:text-2xl sm:text-xl">
          <IoFilterOutline size={15} />
        </div>
        <div className="actionIcons text-3xl md:text-2xl sm:text-xl">
          <IoCreateOutline size={15} />
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
