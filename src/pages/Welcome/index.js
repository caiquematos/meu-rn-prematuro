import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={styles.containerForm}>
        <Text style={styles.title}>Cuide do seu bebê RN da melhor forma!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9B3C94",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: { color: "#a1a1a1" },
  button: {
    position: "absolute",
    backgroundColor: "#9B3C94",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});
