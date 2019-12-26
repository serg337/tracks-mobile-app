import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
