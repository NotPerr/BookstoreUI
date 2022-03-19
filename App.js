import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import DetailsScreen from "./src/screens/DetailScreen"


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
   
    >
      <Stack.Screen name="Home" component={AlbumList} />
      <Stack.Screen name="detail" component={DetailsScreen} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyStack />
    </NavigationContainer>
  );
}
// function App () {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar />
//       <Header />
//       <AlbumList />
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// export default App;
