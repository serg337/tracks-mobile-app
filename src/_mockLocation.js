// This file is only for testing purposes
import * as Location from "expo-location";

const tenMeterWithDegrees = 0.0001;
const getLocation = increment => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 9.868933 + increment * tenMeterWithDegrees,
      latitude: 53.610928 + increment * tenMeterWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
