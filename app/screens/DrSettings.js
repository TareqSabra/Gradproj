import React ,{useEffect,useState} from 'react';
import { ListItem,Icon,Avatar} from 'react-native-elements';
import {View,StyleSheet,Alert} from "react-native";
import colors from "../config/colors";
import { useNavigation } from '@react-navigation/native';
const list = [
    {
      title: 'My profile',
      icon: 'portrait'
    },
    {
      title: 'New patient account',
      icon: 'add'
    },
    {
      title: 'Add to My Patients',
      icon: 'toll'
    },
    {
      title: 'Log Out',
      icon: 'clear'
    }
]

function DrSettings({ID}) {
const [name,setName] =useState("")
const [subtitle,setsubtitle] =useState("")
//console.log(ID);
const [Listo,SetLiso]=useState([])
  useEffect(() => {
    (async () => {
      //console.log(ID.ID);
      fetch('http://192.168.1.11:8000/api/doctor-detail/'+ID)
      .then((response) => response.json())
      .then((res) => {
        if(res.length<1){
        console.log("Faggot");
        }
        else{
      SetLiso(res)
    setName(res[0].first_name)
    setsubtitle(res[0].speciality)
        }
   }).catch  ((e) => {
      console.log(e);
    })
    })();},[]); 
    
  const navigation = useNavigation();
    return (
  <View style={styles.MainCont}>
    <View style={styles.Continor}>
    <View>
      <ListItem containerStyle={{borderRadius:30,margin:10}}>
        <Avatar source={{uri:"https://picsum.photos/200/400"}} />
        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
          <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
</View>
     {list.map((item, i) => (
    <ListItem key={i} bottomDivider onPress={()=>{ 
      if (item.title==="My profile"){
      navigation.navigate("Mp",{Doctor:Listo[0]});
    }
    else if(item.title==="New patient account"){
      navigation.navigate("Np",{DiD:Listo[0].id,DiDN:Listo[0].first_name});
    }
    else if(item.title==="Add to My Patients"){
      navigation.navigate("EE",{DiD:Listo[0].id,DiDN:Listo[0].first_name});
    }
    else if(item.title==="Log Out"){
      navigation.navigate("M");
    }
    }}>
    <Icon name={item.icon} />
    <ListItem.Content>
    <ListItem.Title>{item.title}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
    </ListItem>
    ))}
    </View>
    </View>);
  }
const styles = StyleSheet.create({  
MainCont:{
backgroundColor:colors.primary,
flex:1,
justifyContent: "center",
alignContent :"center",
 },
 Continor:{
   bottom:"24%"
 },
})
export default DrSettings;