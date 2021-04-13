import React from 'react';
import {StyleSheet, SafeAreaView } from 'react-native';
import colors from "../../config/colors"
import Calender from "../../components/Calender"
function MySessions({ID}) {
    console.log(ID.ID)
    return (
     <SafeAreaView style={styles.MainC}>
         <Calender ID={ID.ID}>
         </Calender>
     </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    MainC:{
      backgroundColor:colors.primary,
      flex:1,
      justifyContent: "center",
    },
    
})
export default MySessions;