import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Context as LocationContext } from "../context/locationContext";
import MapView, { Polyline, Circle } from "react-native-maps";

const TrackMap = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor='rgba(158,158,255,1.0)'
        fillColor='rgba(rgba(158,158,255,0.3))'
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "55%"
  }
});

export default TrackMap;
