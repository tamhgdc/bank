import React, { useState, useEffect } from "react";
import "./styles/profileInfo.scss";
import ImageUploadIcon from "../../assets/images/icons/uploadImage.png";
// import userImage from "../../assets/images/icons/profile.jpg";
import closeIcon from "../../assets/images/icons/closeIcon.png";
import Button from "../Buttons/index";
import { getCurrentUser } from "../../services/auth";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserProfileInfo,
  updateUserProfilePassword,
} from "../../redux/user/action";

function ProfileInfo() {
  const [isDisabled, setIsDisabled] = useState(true);

  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const { loading, accessToken, signOutSuccess } = useSelector(
    (state) => state.auth
  );
  const authUserState = useSelector((state) => state.auth.user);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !accessToken && signOutSuccess) {
      setProfile({ email: "", firstName: "", lastName: "" });
      history.push("/login");
    }
  }, [loading, accessToken, signOutSuccess, history]);

  useEffect(() => {
    setProfile({
      email: authUserState.email,
      firstName: authUserState.firstName,
      lastName: authUserState.lastName,
    });
  }, []);

  function handleUserInfoSubmit(e) {
    e.preventDefault();
    const userId = getCurrentUser().uid;
    dispatch(updateUserProfileInfo(userId, profile));
    setIsDisabled((prevState) => !prevState);
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    dispatch(updateUserProfilePassword(password));
  }

  function handleProfileChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    console.log(e.target.value, "CHANGE");
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <>
      <div className="user-info">
        <h2 className="user-info-title">User information</h2>
        <div className="content">
          <div className="left-column">
            <div className="profile-picture-box">
              {!isUploaded ? (
                <>
                  <label htmlFor="input-upload">
                    <div
                      className="profile-picture-uploaded"
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${ImageUploadIcon})`,
                      }}
                    >
                      <input
                        id="input-upload"
                        className="input-upload"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleImageChange}
                      />
                    </div>
                  </label>
                </>
              ) : (
                <div className="image-preview">
                  <img
                    className="close-icon"
                    src={closeIcon}
                    alt="CloseIcon"
                    onClick={() => {
                      setIsUploaded(false);
                      setImage(null);
                    }}
                  />
                  <img
                    src={image}
                    alt="uploaded-img"
                    id="uploaded-image"
                    className="profile-picture"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="right-column">
            <div className="form-box">
              <form onSubmit={handleUserInfoSubmit}>
                <div>
                  <input
                    className="user-input"
                    placeholder="Name"
                    disabled={isDisabled}
                    name="firstName"
                    onChange={(e) => handleProfileChange(e)}
                    value={profile.firstName}
                  />
                  <input
                    className="user-input"
                    placeholder="Surname"
                    disabled={isDisabled}
                  />
                </div>

                <div>
                  <input
                    className="user-input"
                    placeholder="Email"
                    disabled={isDisabled}
                  />
                  <Button className="user-input password-button">
                    Reset Password
                  </Button>
                </div>
              </form>
            </div>
            <div className="genre-box">
              <div className="genre-side">
                <div className="genre-checkbox-box">
                  <label>
                    Pop Rock
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Rock
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Reggaeton
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Indie
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    EDM
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Rap
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Metal
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Techno
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Jazz
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Blues
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
                <div className="genre-checkbox-box">
                  <label>
                    Country
                    <input className="input-checkbox" type="checkbox"></input>
                  </label>
                </div>
              </div>
              <div className="button-side">
                {isDisabled ? (
                  <Button
                    className="edit-btn"
                    label="Edit"
                    onClick={() => setIsDisabled((prevState) => !prevState)}
                  >
                    Edit
                  </Button>
                ) : null}

                {!isDisabled ? (
                  <Button className="save-btn" onClick={handleUserInfoSubmit}>
                    Save
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
