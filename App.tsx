import { ActivityIndicator, View } from "react-native";
import { Suspense } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/home/templates/home";
import Detail from "./components/detail/templates/detail";

import styles from "./app.scss";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Suspense
      fallback={
        <View className={styles.spinnerContainer}>
          <ActivityIndicator />
        </View>
      }
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
}
