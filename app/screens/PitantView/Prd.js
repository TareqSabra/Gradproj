import React from 'react';
import {StyleSheet, View ,Text}from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
import colors from "../../config/colors";
function Prd({route}) {
    const ID = route.params
    var value = String(ID.ID)
    console.log(value)
    return (
       <SafeAreaView style={styles.MainC}>
        <View style={{marginVertical:20 ,position:"absolute",zIndex:1,top:"30%"}}>
        <Text style={{fontWeight:"bold" ,fontSize:20}}>Scan Qr code to Register Patient</Text>
        </View>
       <QRCode size={200} value={value}/>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    MainC:{
        backgroundColor:colors.primary,
        alignItems: "center",
        justifyContent: "center",
        alignContent :"center",
        flex:1,
    },
})
export default Prd;
