import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import { navigate } from "../navigationRef";
import { AuthSession } from "expo";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "sign_in":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: action.payload };
    case "sign_out":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};
// Getting the token from AsyncStorage

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "sign_in", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

// Clean Error Messages
const clearErrorMessage = dispatch => () => {
  dispatch({
    type: "clear_error_message",
    payload: ""
  });
};

// Functions to change the Auth state
const signUp = dispatch => async ({ username, email, password }) => {
  try {
    const response = await trackerAPI.post("/auth/local/register", {
      username,
      email,
      password
    });
    await AsyncStorage.setItem("token", response.data.jwt);
    dispatch({ type: "sign_in", payload: response.data.jwt });
    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with Sign Up"
    });
  }
};

const signIn = dispatch => async ({ identifier, password }) => {
  try {
    const response = await trackerAPI.post("/auth/local", {
      identifier,
      password
    });
    await AsyncStorage.setItem("token", response.data.jwt);
    dispatch({ type: "sing_in", payload: response.data.jwt });
    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with Sign In"
    });
  }
};

const signOut = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "sign_out" });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signUp, signOut, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: "" }
);
