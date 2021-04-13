import React,{useEffect,useState} from 'react';
import { View,StyleSheet,Text,TouchableHighlight } from 'react-native';
import { Avatar,ListItem } from 'react-native-elements';
import colors from "../config/colors";
import { useNavigation } from '@react-navigation/native';

function DrProfile({route}) { 
const navigation = useNavigation(); 
const {PID,DID}= route.params
const[List,Setlist]=useState(["empty"])
    useEffect(() => {
        (async () => {
          console.log(PID);
         // console.log(DID);
          fetch('http://192.168.1.11:8000/api/patient-detail/'+PID)
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
            }
            //console.log("between")
           // console.log(List)
       }).catch  ((e) => {
          console.log(e);
        })
        })();},[]); 
        console.log(List[0]);
    const pname = List[0].full_name
    const Adress ="Adress:  "+List[0].city
    const PhoneNumber ="PhoneNumber:  "+List[0].cinf
    const BloodType ="BloodType:  "+List[0].bloodtype
    const Gender ="Gender:  "+List[0].gender
    const AlergyCronicDesease ="Allergies and CronicDesease:  "+List[0].a_cdisease
    const past_history =List[0].past_history
    const family_history =List[0].family_history
    const present_history =List[0].present_history
    return (  
        <View style={styles.MainC}>
            <View  style ={styles.DrView}>
            <ListItem containerStyle={{borderRadius:30,margin:10}}>
        <Avatar source={{uri:"https://picsum.photos/200/400"}} />
        <ListItem.Content>
          <ListItem.Title>{pname}</ListItem.Title>
          <ListItem.Subtitle>{PID}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
         </View>
         <View style={styles.TextView}>
            <Text style= {styles.Textstyle}>{Adress}</Text>
            <Text style={styles.Textstyle} >{PhoneNumber}</Text>
            <Text style = {styles.Textstyle}>{BloodType}</Text>
            <Text style = {styles.Textstyle}>{Gender}</Text>
            <Text style = {styles.Textstyle}>{AlergyCronicDesease}</Text>
            <TouchableHighlight style={{backgroundColor:colors.buttonColor,width:"40%",borderRadius:30 ,padding:"2%"}} onPress={()=>{navigation.navigate("ViewHistory",{PAH:past_history,PRH:present_history,FH:family_history,PN:pname,DID:1})}}>
                <View>
                    <Text>See Pitant's history</Text>
                </View>
            </TouchableHighlight>
           </View>
        </View>);}
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
    margin :"2.5%",
    paddingHorizontal :"2%"
 },
 Textstyle:{
    fontSize:12,
    fontWeight:"bold",
    padding:10
 }
})
export default DrProfile;