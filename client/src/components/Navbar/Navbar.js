import "./navbar.scss";
import { RiSettings4Line, RiMusic2Line, RiHistoryFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="search">
        <div className="circle"></div>
        <form>
          <input type="text" placeholder="Artistas, canciones o albums" />
        </form>
      </div>
      
      <div className="nav-rigth-side">
        <div className="user">
          <input type="checkbox" id="menu" />
          <label for="menu" class="icon">
            <div className="menu"></div>
          </label>

          <nav>
            <ul>
              <li>
                <RiMusic2Line className="list-icon" />
              </li>
              <li>
                <MdFavoriteBorder className="list-icon" />
              </li>
              <li>
                <GoListUnordered className="list-icon" />
              </li>
              <li>
                <RiHistoryFill className="list-icon" />
              </li>
              <li>
                <RiSettings4Line className="list-icon" />
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
        
        <div className="menu-general"></div>
      </div>
    </div>
  );
}

export default Navbar;
