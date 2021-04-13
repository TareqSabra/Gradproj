import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainD from "./PitantView/PitantHome";
import colors from '../config/colors';
import Drset from "./PitantView/PitantSettings";
import DreP from "./PitantView/MyDoctors";
import Ps from "./PitantView/MySessions"
import {MaterialCommunityIcons}  from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function DrNav({route}) {
  const ID = route.params
  console.log(ID)
  return ( 
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:colors.secondary}}
    screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
         
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused 
            ? 'account-alert' 
            : 'account-alert-outline';
          }
          else if (route.name === 'My Doctors'){
            iconName = focused
            ? 'account-circle'
            : 'account-circle-outline';
          }
          else if (route.name === 'My Sessions'){
            iconName = focused
            ? 'notebook'
            : 'notebook-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}>
        
    <Tab.Screen name="Home"  component={()=>< MainD     ID= {ID} ></MainD>}></Tab.Screen>
    <Tab.Screen name="My Doctors"component={()=><DreP   ID= {ID} ></DreP>}></Tab.Screen>
    <Tab.Screen name="My Sessions" component={()=><Ps   ID= {ID} ></Ps>}></Tab.Screen>
    <Tab.Screen name="Settings" component={()=><Drset   ID= {ID} ></Drset>} ></Tab.Screen>
    </Tab.Navigator>
  );
}