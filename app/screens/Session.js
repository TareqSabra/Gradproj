import React,{useState,useEffect} from 'react';
import {View,StyleSheet, Button ,alert} from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors"
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-gesture-handler';
import History from  "./HistoryOnB";
function Session({route}) {
    var date = new Date();
    var G = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+" at "+date.getHours() + ":" + date.getMinutes()
    const {ID, PtId,SP} = route.params
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [List,Setlist]=useState([])
    const [DrName, setDrName] = useState('');
    const [PName, setPName] = useState('');
    const [NewH, setNewH] = useState('');
    useEffect(() => {
        (async () => {
          console.log(ID.ID);
          fetch('http://192.168.1.11:8000/api/treats-detail/'+ID+'/'+PtId)
          .then((response) => response.json())
          .then((res) => {
            if(res.length<1){
            console.log("Faggot");
            }
            else{
           Setlist(res)
           setDrName(res[0].docname)
           setPName(res[0].pname)
            }
            //console.log("between")
           // console.log(List)
       }).catch  ((e) => {
          console.log(e);
        })
        })();},[]); 
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
        if(NewH!=''){
            console.log(NewH)

        }
      };
    const nav =useNavigation();
    
    var DrSpecialty=SP;
    return (
        <SafeAreaView style={styles.MainCon}> 
        <View style={styles.Header}>
            <View>
                 <Text h4 >{"DR "+DrName}</Text>
                 <Text style ={{fontWeight:"bold"}} >{"Specialty : "+DrSpecialty}</Text>
            </View>
            <View>
                 <Text h4 h >{"Pitant "+PName}</Text>
            </View>
            <Button onPress={async()=>{
              fetch('http://192.168.1.11:8000/api/add-session/'+PtId+'/'+G+" "+DrName+": \r\n"+NewH+"\r\n")
              .then((response) => response.json())
              .then((res) => {
                if(res.length<1){
                console.log("Faggot");
                }
                else if(res[0].msg==="good"){
                  nav.navigate("Dp")
                  console.log("you did it")
                }
                else{
                  alert("Check your wifi conection")
                }
           }).catch  ((e) => {
              console.log(e); })}} 
              color="red" title="End Session">
                </Button> 
           
        </View>
        <View style={{margin:15}}>
        <Button  onPress={toggleModal} color={colors.buttonColor} title="Cheak Pitant's history "></Button> 
        </View>
        <Button  onPress={toggleModal2} color={colors.buttonColor} title="Update Current Pitant's history"></Button> 
        <Modal  isVisible={isModalVisible}>
          <View style={{flex:0.8,backgroundColor:colors.White,}}>
           <History DID={ID} ID={PtId} ></History>
          <View style={{position:"absolute",bottom:0,margin:10,alignItems:"center",width:"100%"}}>
         <Button title="ok" onPress={toggleModal}/> 
          </View>
          </View>
        </Modal>
        <Modal  isVisible={isModalVisible2}>
          <View style={{flex:0.5,backgroundColor:colors.White,alignItems: "center",}}>
              <TextInput 
              placeholder="  Session Notes and History Updates..."
              placeholderTextColor={colors.BlueWhite}
              style={{borderWidth:0.5,width:"100%",height:"50%",}}
               onChangeText={NewH => setNewH(NewH)}
              />
          <View style={{position:"absolute",bottom:0,margin:10}}>
         <Button title="Commit changes" onPress={toggleModal2}/> 
          </View>
          </View>
        </Modal>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    MainCon:{
    flex:1,
    backgroundColor:colors.primary,
    alignContent:"center",
    alignItems:"center"
    },
    Header:{
        width:"95%",
        top:0,
        padding:15,
        backgroundColor:colors.secondary,
        borderRadius:30
    },
    TopHeader:{
        padding:7,
    },
    LowerHeader:{
        padding:7,
        height:"10%",
        fontSize :7,
        fontWeight:"bold",
     },
    
}) 
export default Session;