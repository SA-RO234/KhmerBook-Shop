import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import React, { useContext,useEffect } from "react";
import { MenuCotext } from "../context/MenuProvider";
import { useRef } from "react";

const Menu = () => {
  const { Open, setOpen } = useContext(MenuCotext);
  const menuButtonref = useRef(null);

  useEffect(() => {
    const handleClickOutsize = (event) => {
      if (
        menuButtonref.current &&
        !menuButtonref.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsize);
    return () => {
       document.removeEventListener("mousedown",handleClickOutsize);
    };
  }, [setOpen]);

  return (
    <div className="menu xl:hidden">
      <button type="button" ref={menuButtonref} onClick={() => setOpen(!Open)}>
        <FontAwesomeIcon
          icon={faBars}
          className="text-[35px]"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Menu;
