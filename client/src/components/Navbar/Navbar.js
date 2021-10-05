import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/action";
import { resetUserData } from "../../redux/user/action";
import { RiSettings4Line, RiMusic2Line, RiHistoryFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import portadaUno from "../../assets/images/icons/portada-1.png";
import userImage from "../../assets/images/icons/profile.jpg";

import "./style/navbar.scss";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, accessToken, signOutSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!loading && !accessToken && signOutSuccess) {
      history.push("/login");
    }
  }, [loading, accessToken, signOutSuccess, history]);
  const handleProfile = () => {
    history.push("/profile");
  };
  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetUserData());
  };
  const handlePlaylist = () => {
    history.push("/playlist");
  };

  return (
    <>
      <div className="nav-container">
        <div className="search">
          <div
            className="circle"
            style={{
              backgroundImage: `url(${portadaUno})`,
              backgroundSize: "contain",
            }}
          ></div>
          <form>
            <input type="text" placeholder="Artistas, canciones o albums" />
          </form>
        </div>

        <div className="nav-menu">
          <div className="menu-actions">
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="icon">
              <div className="nav-list"></div>
            </label>

            <nav>
              <ul>
                <li className="user-icon-li">
                  <div
                    className="user-icon"
                    style={{
                      backgroundImage: `url(${userImage})`,
                      backgroundSize: "contain",
                    }}
                  ></div>
                  <h5>Laura Morales</h5>
                </li>
                <li onClick={handleProfile}>
                  <BiUserCircle className="list-icon" />
                  <h4>Profile</h4>
                </li>
                <li onClick={handlePlaylist}>
                  <RiMusic2Line className="list-icon" />
                  <h4>Playlists</h4>
                </li>
                <li>
                  <MdFavoriteBorder className="list-icon" />
                  <h4>Favorite</h4>
                </li>
                <li>
                  <GoListUnordered className="list-icon" />
                  <h4>General list</h4>
                </li>
                <li>
                  <RiHistoryFill className="list-icon" />
                  <h4>History</h4>
                </li>
                <li>
                  <RiSettings4Line className="list-icon" />
                  <h4>Settings</h4>
                </li>
                <li onClick={handleLogout}>
                  <IoLogOutOutline className="list-icon" />
                  <h4 className="logout">Logout</h4>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="menu-general"></div>
      </div>
    </>
  );
}

export default Navbar;
