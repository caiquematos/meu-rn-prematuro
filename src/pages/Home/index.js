import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import React from "react";
import Header from "../../build/Header";
import Footer from "../../build/Footer";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg-1.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <Header />
        <View>{/* <FlatGrid></FlatGrid> */}</View>
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
