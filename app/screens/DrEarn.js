import React from 'react';
import { View,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Scaner from "../components/Scanner";
function DrProfile({route}) {
    const ID=  route.params
        console.log(ID.DiD);
        console.log(ID.DiDN);
    return (

        <SafeAreaView style={styles.MainC}>
            <Scaner ID={ID.DiD} NAME={ID.DiDN}></Scaner>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    MainC:{
        flex:1,
        backgroundColor:"#e9e3e3",
    }

})
export default DrProfile;