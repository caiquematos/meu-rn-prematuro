import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LogoHorizontal() {
  return (
    <View style={styles.container}>
      <Text style={styles.lineOneLogo}>
        <Text style={styles.firstTitle}>meu </Text>
        <Text style={styles.secondTitle}>RN</Text>
      </Text>
      <Text style={styles.thirdTitle}>PREMATURO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  lineOneLogo: {
    textAlign: "center",
    alignItems: "baseline",
  },
  firstTitle: {
    fontSize: "20px",
    marginRight: 5,
    color: "#9B3C94",
    fontWeight: "200",
  },
  secondTitle: {
    fontSize: "25px",
    color: "#9B3C94",
    fontFamily: "Baskerville-Italic",
  },
  thirdTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#9B3C94",
    lineHeight: 20,
  },
});
