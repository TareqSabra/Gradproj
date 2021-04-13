import React,{useEffect,useState} from 'react';
import { View,StyleSheet,Text} from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';
import colors from "../../config/colors"
import Rate from "../../components/Rating"
import { SafeAreaView } from 'react-native-safe-area-context';
function DrProfile({route}) { 
    const {DID,PID}= route.params
    console.log(DID)
    const [Drname,SetDrname] =useState('')
    const [Specialty,SetSpecialty] = useState('')
    const [List,Setlist] = useState('')
    const [ClincAdress,SetClincAdress] =useState('')
    const [PhoneNumber,SetPhoneNumber] =useState('')
    const [Description,SetDescription] =useState('')
    const [rank,SetRank] =useState(0)
    

    useEffect(() => {
      (async () => {
        fetch('http://192.168.1.11:8000/api/doctor-detail/'+DID)
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          if(res.length<1){
          console.log("Faggot");
          }
          else{
         Setlist(res)
         console.log(List)
         console.log(res)
         SetDrname(res[0].first_name)
         SetSpecialty(res[0].speciality)
         SetClincAdress("Adress :"+res[0].city)
         SetPhoneNumber("Contact info :"+res[0].contact_info)    
         SetDescription("Qualifications :"+res[0].speciality+"\n"+res[0].digree+"\n"+res[0].qualifications)
         SetRank(res[0].rank)
        }
     }).catch  ((e) => {
        console.log(e);
      })
      })();},[]); 
    return (  
        < SafeAreaView style={styles.MainC}>
            <View style ={styles.DrView}>
         <ListItem containerStyle={{borderRadius:30}}>
        <Avatar source={{uri:"https://picsum.photos/200/400"}} />
        <ListItem.Content style>
          <ListItem.Title>{Drname}</ListItem.Title>
          <ListItem.Subtitle>{Specialty}</ListItem.Subtitle>
        </ListItem.Content>
        </ListItem>
            <View style ={styles.RateView}>
            <Rate 
            editable={false} // true for not editable 
            Rate ={rank} // rate value 
            Color={colors.primary}
            DCID={DID}
            PID={PID}
            />
            </View>
         </View>
         <View style={styles.TextView}>
            <Text style= {styles.Textstyle}>{ClincAdress}</Text>
            <Text style={styles.Textstyle} >{PhoneNumber}</Text>
            <Text style = {styles.Textstyle}>{Description}</Text>
           </View>
        </SafeAreaView>);}
const styles = StyleSheet.create({
    MainC:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems: "baseline",
        justifyContent: "center",
        alignContent :"center",
    },
 DrView:{
    position:"absolute",
    top:"10%",
    width:"100%"
 },
 RateView:{
  position:"absolute",
  top:"91%",
},
 TextView:{
    flex:.5,
    backgroundColor:colors.White,
    borderRadius:15,
    width:"95%",
    margin:10,
 },
 Textstyle:{
    fontSize:12,
    fontWeight:"bold",
    padding:10
 }
})
export default DrProfile;