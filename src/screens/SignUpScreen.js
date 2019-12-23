import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SignUpScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label='Password'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title='Sign Up' onPress={() => signUp({ email, password })} />
      </Spacer>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center"
  },
  errorMessage: {
    fontSize: 15,
    color: "red",
    marginLeft: 15,
    marginTop: 15
  }
});

export default SignUpScreen;
