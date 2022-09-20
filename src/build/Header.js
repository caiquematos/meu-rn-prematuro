import { View, Text, StyleSheet } from "react-native";
import React from "react";
import LogoHorizontal from "../components/LogoHorizontal";

export default function Header() {
  return (
    <View style={styles.container}>
      <LogoHorizontal />
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
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
});
