import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,StyleSheet,Text,TouchableHighlight } from 'react-native';
import { Avatar, Accessory,ListItem } from 'react-native-elements';
import colors from "../../config/colors";
function DrProfile({ID,route}) { 
    const obj =route.params
    console.log(obj)
     const navigation = useNavigation(); 
    const pname =obj.full_name
    const ClincAdress ='HomeAdress : '+obj.city
    const PhoneNumber ='Phone Number: '+obj.cinf
    const BloodType ='BloodType: '+obj.bloodtype
    const Gender ='Gender: '+obj.gender
    const AlergyCronicDesease ='Alergy and CronicDesease: '+obj.a_cdisease
    return (  
        <View style={styles.MainC}>
            <View  style ={styles.DrView}>
            <ListItem containerStyle={{borderRadius:30,margin:10}}>
        <Avatar source={{uri:"https://picsum.photos/200/400"}} />
        <ListItem.Content>
          <ListItem.Title>{pname}</ListItem.Title>
          <ListItem.Subtitle>{ID}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
         </View>
         <View style={styles.TextView}>
            <Text style= {styles.Textstyle}>{ClincAdress}</Text>
            <Text style={styles.Textstyle} >{PhoneNumber}</Text>
            <Text style = {styles.Textstyle}>{BloodType}</Text>
            <Text style = {styles.Textstyle}>{Gender}</Text>
            <Text style = {styles.Textstyle}>{AlergyCronicDesease}</Text>
            <TouchableHighlight style={{backgroundColor:colors.buttonColor,width:"40%",borderRadius:30 ,padding:"2%"}} onPress={()=>{navigation.navigate("ViewHistory",{PAH:obj.past_history,PRH:obj.present_history,FH:obj.family_history,PN:pname,DID:0})}}>
                <View>
                    <Text>See your history</Text>
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