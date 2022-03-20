import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlbumList from "../components/AlbumList";
import DetailsScreen from "../screens/DetailScreen";
import SettingsScreen from '../screens/SettingsScreen';
import BooksScreen from '../screens/BooksScreen';
//import DisplaySettingScreen from '../screens/DisplaySettingScreen';
//import MyTheme from '../Theme';

//import albumData from "../json/albums.json";

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


function MyStack() {
  return (
    <Stack.Navigator
   
    >
      <Stack.Screen  options={{ title: ' ' }} name="Home" component={AlbumList} />
      <Stack.Screen  options={{ title: ' ' }} name="detail" component={DetailsScreen} />
      
    </Stack.Navigator>
  );
}

export default Navigation;