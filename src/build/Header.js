import { View, Text, StyleSheet, Animated, ScrollView } from "react-native";
import React, { useState } from "react";
import LogoHorizontal from "../components/LogoHorizontal";

export default function Header(props) {
  return (
    <Animated.View
      style={
        (styles.container,
        {
          height: props.scrollY.interpolate({
            inputRange: [10, 160, 185],
            outputRange: [100, 20, 0],
            extrapolate: "clamp",
          }),
          opacity: props.scrollY.interpolate({
            inputRange: [1, 75, 170],
            outputRange: [1, 1, 0],
            extrapolate: "clamp",
          }),
        })
      }
    >
      <LogoHorizontal scrollY={props.scrollY} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
});
