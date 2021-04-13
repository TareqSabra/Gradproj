import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./app/screens/login";
import DrNav from "./app/screens/DoctorNav"
import colors from './app/config/colors';
import DrProfile  from "./app/screens/DrProfile";
import AddNewP  from "./app/screens/AddNewP";
import EarnExp  from "./app/screens/DrEarn";
import Session from "./app/screens/Session";
import MainNav from "./app/screens/MainBOTNav"
import PP from "./app/screens/PitantView/PitantP";
import PRD from "./app/screens/PitantView/Prd";
import Nothing from "./app/screens/nothing";
import DrList from "./app/screens/DrList";
import PDV from "./app/screens/PitantView/PitantDrView"
import DPV from "./app/screens/DoctorPitantVeiw"
import VH from "./app/screens/ViewHistory"

export default function App() {
    const Stack = createStackNavigator();
    const StackNavigator = ()=>(
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"tomato"},headerTintColor:colors.secondary,headerTitleContainerStyle:{left :"37.5%"},headerTitleStyle:{fontSize:22}}}>
        <Stack.Screen name="M" options={{headerShown:false}} component={MainNav}></Stack.Screen>
        <Stack.Screen name="DPVIEW" options={{headerShown:false}} component={DPV}></Stack.Screen>
        <Stack.Screen name="ViewHistory" options={{headerShown:false}} component={VH}></Stack.Screen>
        <Stack.Screen name="PDVIEW" options={{headerShown:false}} component={PDV}></Stack.Screen>
        <Stack.Screen name="Ls" options={{headerShown:false}} component={Login}></Stack.Screen>
        <Stack.Screen name="PitantFKED" options={{headerShown:false}}component={Nothing}></Stack.Screen>
        <Stack.Screen name="Dp" options={{headerShown:false}}component={DrNav}></Stack.Screen>
        <Stack.Screen name="PP" options={{headerShown:false}}component={PP}></Stack.Screen>
        <Stack.Screen name="PRD" options={{headerShown:false}}component={PRD}></Stack.Screen>
        <Stack.Screen name="Mp"options={{headerShown:false}}component={DrProfile}></Stack.Screen>
        <Stack.Screen name="Np"options={{headerShown:false}}component={AddNewP}></Stack.Screen>
        <Stack.Screen name="EE"options={{headerShown:false}}component={EarnExp}></Stack.Screen>
        <Stack.Screen name="NewS"options={{headerShown:false}} component={Session}></Stack.Screen>
        <Stack.Screen name="DrList" options={{headerShown:false}}component={DrList}></Stack.Screen>
      </Stack.Navigator>
    )
    return ( 
        <NavigationContainer>
        <StackNavigator/>
        </NavigationContainer>
       
    );
}