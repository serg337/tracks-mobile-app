import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      {buttonText === "Sign Up" ? (
        <View>
          <Input
            label='Username'
            value={username}
            onChangeText={setUsername}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Spacer />
          <Input
            label='Email'
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
      ) : (
        <Input
          label='Username or Email'
          value={identifier}
          onChangeText={setIdentifier}
          autoCapitalize='none'
          autoCorrect={false}
        />
      )}
      <Spacer />
      <Input
        label='Password'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={buttonText}
          onPress={() => onSubmit({ username, email, password, identifier })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 15,
    color: "red",
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;
