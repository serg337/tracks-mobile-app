import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      state;
  }
};

const fetchTracks = dispatch => () => {};
const createTracks = dispatch => async (name, locations) => {
  await trackerAPI.post("/tracks", { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTracks },
  []
);
