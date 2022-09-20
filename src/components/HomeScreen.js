import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { FlatGrid } from "react-native-super-grid";
import Header from "../build/Header";

export default function HomeScreen() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <ImageBackground
      source={require("../assets/bg-1.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Header scrollY={scrollY} />
        <ScrollView
          style={styles.scroll}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollY } },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          {/* <FlatGrid></FlatGrid> */}
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  background: {
    flex: 1,
  },
  scroll: {
    borderTopWidth: 2,
    borderTopColor: "white",
  },
  box: {
    width: "100%",
    height: 300,
    backgroundColor: "gray",
    flex: 1,
    marginBottom: 10,
  },
});
