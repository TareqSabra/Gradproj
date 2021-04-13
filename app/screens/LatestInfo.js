import React ,{useState,useEffect}from 'react';
import { StyleSheet,Text,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors"
function LatestInfo({obj}) {
    //console.log(obj)
    const[name,SetName]=useState("")
    const[BloodType,SetBloodType]=useState("")
    const[emrc,Setemrc]=useState("")
    const[des,Setdes]=useState("")
    useEffect(() => {
      (async () => {
        if(typeof obj != 'undefined'){
          SetName("Name :"+obj.full_name)
          SetBloodType("BloodType :"+obj.bloodtype)
          Setemrc("Emargancy Contact :"+obj.emr)
          Setdes("Allergie & chronic disease  :"+obj.a_cdisease)
        }
      })();},[]); 
   
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.Title}>Emargancy Inforamtion !</Text>
        <View style={styles.Conat}>
        <Text style={styles.Text}>{name}</Text>
        <Text style={styles.Text}>{BloodType}</Text>
        <Text style={styles.Text}>{emrc}</Text>
        <Text style={styles.Text}>{des}</Text>
        </View>

      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  main:{
    backgroundColor:colors.primary,
    flex:1,
    alignContent:"center",
    alignItems:"center"
  },
  Title:{
    fontSize:25,
    fontWeight:"bold",
    margin:10,
    color:"red"
  },
  Conat:{
    width:"95%",
    backgroundColor:colors.White,
    height:"90%",
    borderRadius:30
  },
  Text:{
    fontSize:18,
    fontWeight:"bold",
    margin:15,
    color:"red",
  },

    
})
export default LatestInfo;