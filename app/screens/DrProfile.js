import React from 'react';
import { View,StyleSheet,Text} from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';
import colors from "../config/colors"
import Rate from "../components/Rating"
import { SafeAreaView } from 'react-native-safe-area-context';
function DrProfile({route}) { 
   const Dr = route.params
   var local =Dr.Doctor
    const Drname = local.first_name
    const Specialty = local.speciality
    const ClincAdress ='ClincAdress :'+local.city
    const PhoneNumber ='Phone Number: '+local.contact_info
    const Description = local.digree+"\n"+local.speciality+"\n"+local.qualifications
    return (  
        < SafeAreaView style={styles.MainC}>
            <View  style ={styles.DrView}>
         <ListItem containerStyle={{borderRadius:30}}>
        <Avatar source={{uri:"https://picsum.photos/200/400"}} />
        <ListItem.Content style>
          <ListItem.Title>{Drname}</ListItem.Title>
          <ListItem.Subtitle>{Specialty}</ListItem.Subtitle>
        </ListItem.Content>
        </ListItem>
            <View style ={styles.RateView}>
            <Rate 
            editable={true} // true for not editable 
            Rate ={local.rank} // rate value 
            Color={colors.primary}
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
       // alignItems: "baseline",
        justifyContent: "center",
        //alignContent :"center",
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
    margin:10
 },
 Textstyle:{
    fontSize:12,
    fontWeight:"bold",
    padding:10
 }
})
export default DrProfile;