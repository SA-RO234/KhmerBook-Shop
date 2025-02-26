import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import React, { useContext} from "react"; 
import { MenuCotext } from "../context/MenuProvider";

const Menu = () => {
  const { Open, setOpen }  = useContext(MenuCotext);
  return (
    <div className="menu xl:hidden">
      <button type="button" onClick={()=> setOpen(!Open)}>
        <FontAwesomeIcon
          icon={faBars}
          className="text-[35px]"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Menu;
