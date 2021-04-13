import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainD from "./mainDotorScreen";
import Drset from "./DrSettings";
import DreP from "./DrP";
import DrNs from "./DrNewS";
import colors from "../config/colors"
import {MaterialCommunityIcons}  from "@expo/vector-icons";
import { LogBox } from 'react-native';
const Tab = createBottomTabNavigator();
export default function DrNav({route}) {
  const ID=  route.params
  //console.log(route.params)
  var local = ID.ID;
  var SP = ID.SP;
 //console.log(ID)
  console.log(SP)

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
          else if (route.name === 'My Patients'){
            iconName = focused
            ? 'account-group'
            : 'account-group-outline';
          }
          else if (route.name === 'New Session'){
            iconName = focused
            ? 'note'
            : 'note-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}>
        
    <Tab.Screen name="Home"  component={()=>< MainD ID= {local} ></MainD>}></Tab.Screen>
    <Tab.Screen name="My Patients"component={()=>< DreP ID= {local} ></DreP>}></Tab.Screen>
    <Tab.Screen name="New Session" component={()=>< DrNs ID= {local} SP={SP}></DrNs>}></Tab.Screen>
    <Tab.Screen name="Settings" component={()=>< Drset ID= {local} ></Drset>}></Tab.Screen>
    </Tab.Navigator>
  );
}