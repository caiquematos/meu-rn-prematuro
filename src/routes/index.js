import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Signuptwo from "../pages/Signuptwo";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Signuptwo"
        component={Signuptwo}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
