import React, {useState} from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, Image ,Pressable,StyleSheet,TouchableHighlight, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AlbumList from "../components/AlbumList";
import DetailsScreen from "../screens/DetailScreen";
import SettingsScreen from '../screens/SettingsScreen';
import BooksScreen from '../screens/BooksScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();





const Navigation = () => {

  


  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  //const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="MyStack"
      screenOptions={{
        tabBarInactiveTintColor: "#666666",
        tabBarActiveTintColor: "#6200EE",
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="MyStack" 
        component={MyStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="SettingsStack" 
        component={SettingsStack} 
        options={{
          headerShown: false,
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />


      <Tab.Screen 
        name="MyBooks" 
        component={MyBooks} 
        options={{
          headerShown: false,
          title: "MyBooks",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>    
  );
}

const MyBooks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={BooksScreen}
        options={{
          title: "MY BOOKS",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>    
  );
}

//let wish = "#000";




function MyStack() {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
};
  
  return (
    <Stack.Navigator
   
    >
      <Stack.Screen  options={{ 
        title: ' ',
        headerRight: () => (
          
          <Pressable onPress={() => alert('Oops!')}>
            {/* <MaterialCommunityIcons name="search" color="#000" size={26} /> */}
            <Image
              style={styles.btn}
              source={require('../../assets/btn_search.png')} 
            />
          </Pressable>
        )
    }} name="Home" component={AlbumList} />
      <Stack.Screen  options={{ 
        title: ' ',
        headerRight: () => (
          
          // <Pressable onPress={() => wish = "#6200EE"}>
          //   <MaterialCommunityIcons name="bookmark" color="#000" size={26} style={styles.btn}/>
            
          // </Pressable>

          <TouchableOpacity style={styles.btn} onPress={() => toggleFunction()}>
        <Text>{toggle ? <MaterialCommunityIcons name="bookmark-outline" color="#000" size={26} style={styles.btn}/> : 
        <MaterialCommunityIcons name="bookmark" color="#000" size={26} style={styles.btn}/>}</Text>
      </TouchableOpacity>


        )
    }} name="detail" component={DetailsScreen} />
      
    </Stack.Navigator>
  );
}
 const onPress = () => wish = "#6200EE";

const styles = StyleSheet.create({
  btn: {
    marginRight: 10,
  },
  
});

export default Navigation;