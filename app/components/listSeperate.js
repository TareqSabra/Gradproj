import React from 'react';
import {StyleSheet} from "react-native";
function listSeperate() {
    return (
        <view style={styles.separtor}/>
    );
}
const styles = StyleSheet.create({
    separtor :{
        width:"100%",
        height:1,
        backgroundColor:"#000",
    },
});
export default listSeperate;
