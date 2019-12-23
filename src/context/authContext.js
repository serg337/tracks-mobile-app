import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "sign_up":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

// Functions to change the Auth state
const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "sign_up", payload: response.data.token });
    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with Sign Up"
    });
  }
};

const signIn = dispatch => {
  return ({ email, password }) => {
    // Try to sign in
    // handle success by updating state
    // Handle failure with error message
  };
};

const signOut = dispatch => {
  return () => {
    // Sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signUp, signOut },
  { token: null, errorMessage: "" }
);
