import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, linkText, routeName }) => {
  return (
    <Spacer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routeName);
        }}
      >
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 18
  }
});

export default withNavigation(NavLink);
