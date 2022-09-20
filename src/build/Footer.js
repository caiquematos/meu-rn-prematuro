import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  return (
    <View style={styles.container}>
      {/* <Icon name="home" size={30} color="#900" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 2,
    borderTopColor: "white",
  },
});
