import React, { useContext } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/locationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations }
  } = useContext(LocationContext);
  const [saveTracks] = useSaveTrack();
  return (
    <View>
      <Spacer />
      <Input placeholder='Track Name' onChangeText={changeName} value={name} />
      <Spacer>
        {recording ? (
          <Button title='Stop' onPress={stopRecording} />
        ) : (
          <Button title='Start' onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title='Save Recording' onPress={saveTracks} />
        ) : null}
      </Spacer>
    </View>
  );
};

export default TrackForm;
