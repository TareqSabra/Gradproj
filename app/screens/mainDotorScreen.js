import React,{useEffect,useState} from 'react';
import {StyleSheet, View,Text,ScrollView} from 'react-native';
import colors from '../config/colors';
import Clock from "../components/Dat&Clock"
import { Tooltip} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { ListItem, Avatar } from 'react-native-elements';
function mainDotorScreen({ID}){
const[List,Setlist]=useState(["empty"])
 useEffect(() => {
    (async () => {
     // console.log(ID.ID);
      fetch('http://192.168.1.11:8000/api/get-Patients-By-Doc-from-Appointments/'+ID)
      .then((response) => response.json())
      .then((res) => {
        if(res.length<1){
        console.log("Faggot");
        }
        else{
       Setlist(res)
        }
   }).catch  ((e) => {
      console.log(e);
    })
    })();},[]); 
var local = ID;
//console.log(local);
  const numberofAppointmets =List.length; 
  const renderItem = ({item}) => (
    <ListItem bottomDivider >
      <ListItem.Content>
        <ListItem.Title>{item.pname}</ListItem.Title>
        <ListItem.Subtitle>{item.time}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron/>
    </ListItem>
  )
 
    return (
     <SafeAreaView style={{flex:1,backgroundColor:colors.primary, alignItems: "center",
        justifyContent: "flex-start",
        alignContent :"center",}}>
            
        <View  style={styles.ClockAndDate}>
            <Clock/>
        </View >
        <View style={{position:"absolute",left:"70%",top:"13%"}}>
        <Tooltip height={70} popover={<Text>number of appointments for today</Text>}>
        <Text  style={{fontSize:50,fontWeight:"bold" }}>{numberofAppointmets}</Text>
        </Tooltip>
        </View>
      <View style ={styles.bottomList}>
            <Text style={{left:"27%",margin:4,fontSize:15,fontWeight:"bold"}}>Appointments Today </Text> 
      <ScrollView>
      {
        List.map((l, i) => (
          <ListItem key={i} bottomDivider  style={{backgroundColor:colors.primary}}>
            <Avatar source={{uri: l.avatar_url}}/>
            <ListItem.Content>
              <ListItem.Title>{l.pname}</ListItem.Title>
              <ListItem.Subtitle>{l.time}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </ScrollView>
        </View>
       </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    MainCon :{
        backgroundColor : colors.primary,
        flex:.5,
        alignItems: "center",
        justifyContent: "center",
        alignContent :"center",
        
    
    },
    ClockAndDate:{
        width :175,
        height:200,
        right:"50%",
        position:"absolute",
        bottom:"70%",
        margin:5
        
    },
    ListofAppointmets:{
        backgroundColor:colors.secondary,
        width :"95%",
        height:"90%",
        position:"absolute",
        paddingVertical:100,
        flex:0.5,
        margin:5
        
    }, 
    bottomList:{
        position:"absolute",
        bottom:0,
        margin:5,
        width:"90%",
        height:"75%",
        backgroundColor:colors.White ,
        borderRadius:30


    }
})
export default mainDotorScreen;