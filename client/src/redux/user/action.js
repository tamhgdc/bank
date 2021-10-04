import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  RESET_USER_DATA,
} from "./types";
import { getUserProfile, updateUserProfile } from "../../api/api";
import { updateUserEmail, updateUserPassword } from "../../services/auth";
import { uploadImages } from "../../services/cloudinary";

export const displayUserProfile =
  ({ userId }) =>
  async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    try {
      const userProfile = await getUserProfile({ userId });
      dispatch({ type: GET_PROFILE_SUCCESS, payload: userProfile });
    } catch (error) {
      dispatch({ type: GET_PROFILE_FAIL, payload: error.message });
    }
  };

export const updateUserProfileInfo = (userId, profile) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { email, profileImage } = profile;

    await updateUserEmail(email);
    const imageData = await uploadImages(profileImage);
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: { ...profile, profileImage: imageData.url },
    });
    await updateUserProfile(userId, profile, imageData.url);
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.message });
  }
};

export const updateUserProfilePassword = (password) => async (dispatch) => {
  dispatch({ type: UPDATE_PASSWORD_REQUEST });
  try {
    await updateUserPassword(password);
    dispatch({ type: UPDATE_PASSWORD_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_PASSWORD_FAIL, payload: error.message });
  }
};

export const resetUserData = () => (dispatch) => {
  dispatch({ type: RESET_USER_DATA });
};
