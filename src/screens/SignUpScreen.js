import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
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
