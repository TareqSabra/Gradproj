import React,{useEffect,useState} from 'react';
import { View,StyleSheet,ScrollView,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';

function ViewHistory({DID,ID}){
    const [List,Setlist]=useState(["empty"])
    useEffect(() => {
        (async () => {
          //console.log(ID);
         // console.log(DID);
          fetch('http://192.168.1.11:8000/api/patient-detail/'+ID)
          .then((response) => response.json())
          .then((res) => {
            //console.log(res)
            if(res.length<1){
            console.log("Faggot");
            }
            else{
           Setlist(res)
           //console.log(List)
          // console.log(res)
            }
            //console.log("between")
           // console.log(List)
       }).catch  ((e) => {
          console.log(e);
        })
        })();},[]); 
  var Header =""
  const PName =List[0].full_name
  const Familly_History =List[0].family_history
  const Past_History =List[0].past_history
  const Current_History =List[0].present_history
  
    Header = "Patient "+PName+"'s History"
    return (
        <SafeAreaView style={styles.MainC}>
           <Text style={{ fontWeight:"bold",fontSize:15, left:"15%",margin:10}}>{Header}</Text>

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