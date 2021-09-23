import {
  signInWithGoogle,
  signUpWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "../../services/auth";
import { syncUserData } from "../../api/api";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_PROFILE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SIGN_OUT_SUCCESS,
} from "./types";

export const login = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await signInWithGoogle();
    const accessToken = res.credential.accessToken;
    const userProfile = {
      name: res.additionalUserInfo.profile.name,
      email: res.additionalUserInfo.profile.email,
      picture: res.additionalUserInfo.profile.picture,
    };
    dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
    dispatch({ type: LOAD_PROFILE, payload: userProfile });
    await syncUserData();
  } catch (error) {}
};

export const registerWithEmailAndPassword =
  (email, password) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      const res = await signUpWithEmailAndPassword(email, password);
      console.log("email and password", res);

      dispatch({
        type: REGISTER_SUCCESS,
      });
      await syncUserData();
    } catch (error) {}
  };

export const loginWithEmailAndPassword =
  (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const res = await signInWithEmailAndPassword(email, password);

      const userProfile = {
        uid: res.user.uid,
        email: res.user.email,
      };
      const accessToken = res.user.multiFactor.user.accessToken;

      dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
      dispatch({ type: LOAD_PROFILE, payload: userProfile });
      await syncUserData();
    } catch (error) {}
  };

export const logOut = () => async (dispatch) => {
  await signOut();
  dispatch({ type: SIGN_OUT_SUCCESS });
};