import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function logo() {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={require("../assets/fp-white.png")}
        style={{ width: "25%", height: "28%" }}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.lineOneLogo}>
          <Text style={styles.firstTitle}>meu </Text>
          <Text style={styles.secondTitle}>RN</Text>
        </Text>
        <Text style={styles.thirdTitle}>PREMATURO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    flex: 2,
    backgroundColor: "#9B3C94",
    justifyContent: "center",
    alignItems: "center",
  },
  lineOneLogo: {
    textAlign: "center",
    alignItems: "baseline",
  },
  firstTitle: {
    fontSize: "35px",
    marginRight: 5,
    color: "white",
    fontWeight: "200",
  },
  secondTitle: {
    fontSize: "40px",
    color: "white",
    fontFamily: "Baskerville-Italic",
  },
  thirdTitle: {
    fontSize: "35px",
    fontWeight: "bold",
    color: "white",
    lineHeight: 35,
  },
});
