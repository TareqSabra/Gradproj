import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons}  from "@expo/vector-icons";
import logIn from "./login";
import Map from "./Map";
import Latest from "./LatestInfo";
import FindD from "./FindD";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();
export default function DrNav({route}) {
   const obj= route.params 
  return ( 
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:colors.secondary}}
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Log In') {
            iconName = focused
              ? 'login'
              : 'login';
          } else if (route.name === 'Find Help') {
            iconName = focused ? 'map-marker' : 'map-marker-outline';
          }
          else if (route.name === 'Find A Doctor') {
            iconName = focused ? 'account-search' : 'account-search-outline';
          }
          else if (route.name === 'Emergancy Info'){
            iconName = focused
            ? 'alert'
            : 'alert-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}>
        
    <Tab.Screen name="Log In"  component={logIn}></Tab.Screen>
    <Tab.Screen name="Find Help"component={Map}></Tab.Screen>
    <Tab.Screen name="Find A Doctor"component={FindD}></Tab.Screen>
    <Tab.Screen name="Emergancy Info" component={()=>< Latest obj={obj}></Latest> }></Tab.Screen>
    
    </Tab.Navigator>
  );
}