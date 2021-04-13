import React from 'react';
import { View,StyleSheet,ScrollView,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';

function ViewHistory({route,}) {
 const {PAH,PRH,FH,PN,DID} = route.params
  var Header =""
  const PName =PN
  const Familly_History =FH
  const Past_History =PAH
  const Current_History =PRH
  if(DID===0){
      Header ="My History"
  }
  else{
    Header = "Patient "+PName+"'s History"
  }

    return (
        <SafeAreaView style={styles.MainC}>
           <Text style={{ fontWeight:"bold",fontSize:15, left:"12%",margin:10}}>{Header}</Text>

            <ScrollView contentContainerStyle={{flex:1}}>
                <View style={styles.SeparateViewStyle}>
                <Text style={styles.textStyle}>Familly History</Text>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.InnerTextStyle}>{Familly_History}</Text>
                </ScrollView>
               </View>
                <View style={styles.SeparateViewStyle}>
                <Text style={styles.textStyle}> Past History</Text>
                <ScrollView style={styles.scrollView} >
                <Text style={styles.InnerTextStyle}>{Past_History}</Text>
                </ScrollView>
                </View>
                <View style={styles.SeparateViewStyle}>
                <Text style={styles.textStyle}>Current History</Text>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.InnerTextStyle}>{Current_History}</Text>
                </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    MainC:{
        backgroundColor:colors.primary,
        flex:1,
        alignContent:"center",
        justifyContent:"center",
    },
    SeparateViewStyle:{
        backgroundColor:colors.secondary,
        margin:10,
        width:"90%",
        height:"70%",
        flex:0.33,
        borderRadius:30,
        left :"2.5%"
    },
    scrollView:{
        flex:1
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:15,
        left:"30%"
    },
    InnerTextStyle:{
        fontWeight:"bold",
        fontSize:11,
        margin:5
    }

})
export default ViewHistory;