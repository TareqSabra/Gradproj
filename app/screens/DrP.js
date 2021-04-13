import React,{useState,useEffect} from 'react';
import { View,StyleSheet,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors"
import { ListItem, Avatar ,Button,SearchBar} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

function DrP({ID}) {

  const[List,Setlist]=useState(["empty"])
  const[Search,SetSearch]=useState(0)

  useEffect(() => {
    (async () => {
      //console.log(ID.ID);
      fetch('http://192.168.1.11:8000/api/get-Patients-By-Doc-from-Treats/'+ID)
      .then((response) => response.json())
      .then((res) => {
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

 const navigation = useNavigation(); 

    return (
       <SafeAreaView style={styles.MainC}>
           <View>
           <SearchBar
           placeholder="Search.."
           onChangeText={(Search)=>{SetSearch(Search)}}
           value={Search}
           containerStyle ={{backgroundColor:colors.secondary,borderRadius:15,borderWidth:0.1}}
           inputContainerStyle= {{backgroundColor:colors.White,borderRadius:30}}
      />
           </View>
           <Button  type= 'solid' title={"Search"} onPress={()=>{
            navigation.navigate("DPVIEW",{PID:Search,ID:ID})}} buttonStyle={{backgroundColor:colors.buttonColor}} containerStyle={{margin:5,borderRadius:30 ,width:"70%",left:"15%"}}></Button>
      <View style={styles.PlistView}>
      <ScrollView>
      {
        List.map((l, i) => (
          <ListItem onPress ={()=>{navigation.navigate("DPVIEW",{PID:l.pid,ID:ID})}} key={i} bottomDivider  style={{backgroundColor:colors.primary}}>
            <Avatar source={{uri: l.avatar_url}}/>
            <ListItem.Content>
              <ListItem.Title>{l.pname}</ListItem.Title>
              <ListItem.Subtitle>{l.pid}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </ScrollView>
      </View>
       </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    MainC:{
        backgroundColor: colors.primary,
        flex:1,
        //padding:12,
       // alignContent:"center"


    },
    PlistView:{
        borderRadius:20,
        backgroundColor :colors.White,
        width:"95%",
        height :"88%",
        marginLeft :"2%",
       // marginTop :"2%"
    },
})
export default DrP;