import { ActivityIndicator, View } from "react-native";
import React, { Suspense, lazy, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "./components/home/templates/home";

const Home = lazy(() => import("./components/home/templates/home"));

// import Detail from "./components/detail/templates/detail";
//

// const DynamicLoader = ({ component, parentUpdate }) => {
//   const LazyComponent = useMemo(
//     () => React.lazy(() => import(component)),
//     [component]
//   );

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <LazyComponent parentUpdate={parentUpdate} />
//     </Suspense>
//   );
// };

import styles from "./app.scss";

const Stack = createNativeStackNavigator();

export default function App() {
  const Detail = useMemo(() =>
    lazy(() => import("./components/detail/templates/detail"))
  );
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
