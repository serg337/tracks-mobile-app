import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {
  const { state, signUp, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        onSubmit={signUp}
        buttonText='Sign Up'
      />
      <NavLink
        routeName='SignIn'
        linkText='Already have an account? Sign in instead'
      />
    </View>
  );
};

// This is one way to make a null header
SignUpScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: "center"
  }
});

export default SignUpScreen;
