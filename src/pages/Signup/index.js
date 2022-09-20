import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastre-se</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <ScrollView>
          <Text style={styles.title}>Nome do bebê</Text>
          <TextInput style={styles.input} />

          <Text style={styles.title}>Data nascimento</Text>
          <TextInput placeholder="10/10/2022" style={styles.input} />

          <Text style={styles.title}>Idade gestacional corrigida</Text>
          <TextInput placeholder="10" style={styles.input} />

          <Text style={styles.title}>Peso (kg)</Text>
          <TextInput placeholder="2" style={styles.input} />

          <Text style={styles.title}>Data da alta hospitalar</Text>
          <TextInput placeholder="10/11/2022" style={styles.input} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Signuptwo")}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9B3C94",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#9B3C94",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
});
