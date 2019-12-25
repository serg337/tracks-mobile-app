import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignInScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText='Sign In for Tracker'
        errorMessage={state.errorMessage}
        onSubmit={signIn}
        buttonText='Sign In'
      />
      <NavLink
        routeName='SignUp'
        linkText="Don't have an account? Sing Up instead"
      />
    </View>
  );
};

// This is another way to make a null header
SignInScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: "center"
  }
});

export default SignInScreen;
