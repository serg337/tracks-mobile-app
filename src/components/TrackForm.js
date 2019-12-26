import React, { useContext } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/locationContext";

const TrackForm = () => {
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations }
  } = useContext(LocationContext);
  return (
    <View>
      <Spacer>
        <Input
          placeholder='Track Name'
          onChangeText={changeName}
          value={name}
        />
        {recording ? (
          <Button title='Stop' onPress={stopRecording} />
        ) : (
          <Button title='Start' onPress={startRecording} />
        )}
      </Spacer>
    </View>
  );
};

export default TrackForm;
