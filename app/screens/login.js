import React,{useState} from 'react';
import { SafeAreaView,View, StyleSheet, Image, TouchableOpacity, Text ,KeyboardAvoidingView,createAppContainer ,TextInput, Alert, LogBox } from 'react-native';
import colors from '../config/colors';
import { Button } from 'react-native-elements';

function loginScreen({navigation}) {
    var role;
    var IDN;
    var SPE;
    const [ID, setID] = useState('somevalue');
    const [Pass, setPass] = useState('somevalue');


    var ButtonPressed = async()=>{
         fetch('http://192.168.1.11:8000/api/login/'+ID+'/'+Pass)
         .then((response) => response.json())
         .then((res) => {
            //console.log(res)
             if(Number(res.length)===0){
                 role="Unknown"
                 //console.log(role)
             }
             else{
                 role=res[0].role;
                 IDN=res[0].id;
                 SPE=res[0].speciality;

                 if(role==="doctor"){
                    navigation.navigate("Dp",{ID:IDN,SP:SPE});
                }
                else if(role==="patient"){
                    navigation.navigate("PitantFKED",{
                        ID:IDN});
                 }
                 
                
                 }
       }).catch  ((e) => {
          console.log(e);
        });
        if(role==="Unknown"){
            alert("Wrong User Name or Password");
         }
   console.log("button pressed")
    
     
   }
    
    return (     
    <SafeAreaView style={styles.viewBackground}>
        <View style={{backgroundColor:"tomato" ,width:"100%",position:"absolute",top:0,height:"10%",borderBottomEndRadius:15,borderBottomLeftRadius:15}}>
        </View>
     <Image style={styles.logopic} source={require("../assets/logo.png")}/>
   
    <TextInput  
         placeholder='User ID'
         onChangeText={ID => setID(ID)}
         style={{borderBottomWidth:1,width:"40%",margin:10,borderRadius:10,borderColor:colors.Black,bottom:"-14%"}}
           />
           <TextInput  placeholder="Password" secureTextEntry={true}
           style={{borderBottomWidth:1,width:"40%",margin:10,bottom:"-14%"}}
           onChangeText={Pass => setPass(Pass)} />
 
        <Button
        title="Log in"
        type="outline"
        titleStyle ={{textAlign:"center",color:"#fff"}}
        buttonStyle={{width: "80%",backgroundColor:colors.buttonColor,borderRadius: 17 ,}}
        onPress ={ButtonPressed}
        containerStyle ={{width:"80%",paddingLeft:"7%", alignItems: "center",
        justifyContent: "center",
        alignContent :"center",bottom:"-15%",left:"-4%"}}
        />
  </SafeAreaView >
    );
    
}

const styles = StyleSheet.create({

    viewBackground: {
        flex:1 , 
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        alignContent :"center", 
    },

    logopic: {
        width: 400,
        height: 350,
       bottom:"40%",
       position:"absolute",
       left:"1%"
    },
    button: {
        backgroundColor: "#000",
        borderRadius: 20,
        width: "50%",
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        borderWidth: 1,
        borderColor: colors.BorderColorblue,
    },
    textStyle: {
        color: colors.BlueWhite,
        fontSize: 18,
        textTransform: 'uppercase',
       fontWeight : 'bold',
    },
   Inputs:{
        position:"absolute",
        width :"90%",
        bottom:"25%"
        
    }
});
export default loginScreen;