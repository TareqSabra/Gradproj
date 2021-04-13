import React,{useEffect,useState} from 'react';
import { ListItem, Icon,Avatar} from 'react-native-elements';
import {View,StyleSheet,Alert} from "react-native";
import colors from "../../config/colors";
import { useNavigation } from '@react-navigation/native';
const list = [
    {
      title: 'My profile',
      icon: 'portrait'
    },
    {
      title: 'Register with a Doctor',
      icon: 'add'
    },
    {
      title: 'Log Out',
      icon: 'clear'
    }
]
function DrSettings({ID}) {
  console.log(ID)
  const [Pname,setPname] =useState("")
  const [subtitle,setsubtitle] =useState("")
  const [Listo,SetLiso]=useState([])
    useEffect(() => {
      (async () => {
        fetch('http://192.168.1.11:8000/api/patient-detail/'+ID.ID)
        .then((response) => response.json())
        .then((res) => {
          if(res.length<1){
          console.log("Faggot");
          }
          else{
        SetLiso(res)
        setPname(res[0].full_name)
        setsubtitle(res[0].id)
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
          <ListItem.Title>{Pname}</ListItem.Title>
          <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
  
</View>
     {list.map((item, i) => (
    <ListItem key={i} bottomDivider onPress={()=>{ 
      if (item.title==="My profile"){
      navigation.navigate("PP",Listo[0]);
    }
    else if(item.title==="Register with a Doctor"){
      navigation.navigate("PRD",{ID:ID.ID});
    }
    else if(item.title==="Log Out"){
      navigation.navigate("M",Listo[0]);
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