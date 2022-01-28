import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// This is from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // NavigationContainer is a component which manages our navigation tree and contains the navigation state

  // Stack.Navigator is a component that takes route configuration as its children with additional
  // props for configuration and renders our content

  // Stack.Screen component takes a name prop which refers to the name of the route
  // and component props which specifies the component to render for the route
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
