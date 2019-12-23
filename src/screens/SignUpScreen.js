import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button
        title='Go to Sign In'
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title='Go to Main Flow'
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
