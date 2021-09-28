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
} from "./types";
import { getUserProfile, updateUserProfile } from "../../api/api";
import { updateUserEmail, updateUserPassword } from "../../services/auth";

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
    const { email } = profile;

    await updateUserEmail(email);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: profile });
    await updateUserProfile(userId, profile);
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