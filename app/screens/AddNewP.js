import React ,{useState}from 'react';
import {StyleSheet,TextInput,View, Button,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors"
//import DatePicker from "../components/DatePicker"
function DrProfile({route}) {
      const ID=  route.params
        console.log(ID.DiD);
        console.log(ID.DiDN);
        const [textInputID, setTextInputID] = useState('');
        const [textInputPass, setTextInputPass] = useState('');
        const [textInputName, setTextInputName] = useState('');
        const [textInputBOD, setTextInputBOD] = useState('');
        const [textInputGender, setTextInputGender] = useState('');
        const [textInputCity, setTextInputCity] = useState('');
        const [textInputCinf, setTextInputCinf] = useState('');
        const [textInputBloodType, setTextInputBloodType] = useState('');
        const [textInputWeight, setTextInputWeight] = useState('');
        const [textInputHieht, setTextInputHieht] = useState('');
        const [textInputA_Cdisease, setTextInputA_Cdisease] = useState('');
        const [textInputFamilyHistory, setTextInputFamilyHistory] = useState('');
        const [textInputEmr, setTextInputEmr] = useState('');
        const [textInputInsureN, setTextInputInsureN] = useState('');
        const checkTextInput = async() => {
            //Check for the Name TextInput
            if (!textInputID.trim()) {
              alert('Please Enter Paitant ID');
              return;
            }
            //Check for the Email TextInput
            if (!textInputPass.trim()) {
              alert("Please Enter Paitant's PassWord ");
              return;
            }
            if (!textInputName.trim()) {
                alert("Please Enter Paitant's Name");
                return;
              }
            if (!textInputBOD.trim()) {
                alert("Please Enter Paitant's Birth Date");
                return;
              }
              if (!textInputGender.trim()) {
                alert("Please Enter Paitant's Gender");
                return;
              }
              if (!textInputCity.trim()) {
                alert("Please Enter Paitant's City");
                return;
              }
              if (!textInputCinf.trim()) {
                alert("Please Enter Paitant's Contact Info");
                return;
              }
              if (!textInputBloodType.trim()) {
                alert("Please Enter Paitant's BloodType");
                return;
              }
              if (!textInputWeight.trim()) {
                alert("Please Enter Paitant's Weight");
                return;
              }
              if (!textInputHieht.trim()) {
                alert("Please Enter Paitant's Hieht");
                return;
              }
              if (!textInputA_Cdisease.trim()) {
                alert("Please Enter Paitant's Ailergy and Cronic Deasease ");
                return;
              }
              if (!textInputFamilyHistory.trim()) {
                alert("Please Enter Paitant's FamilyHistory");
                return;
              }
              if (!textInputEmr.trim()) {
                alert("Please Enter Paitant's Emergancy info");
                return;
              }
              if (!textInputInsureN.trim()) {
                alert("Please Enter Paitant's Insuurance number");
                return;
            }
            let eee = {
            'docID':ID.DiD,
            'docName':ID.DiDN,
            'id':textInputID,
            'pass':textInputPass,
            'role':"patient",
            'full_name':textInputName ,
            'gender':textInputGender,
            'city':textInputCity,
            'cinf':textInputCinf,
            'bloodtype':textInputBloodType,
            'weight':textInputWeight,
            'height':textInputHieht,
            'present_history':" ",
            'past_history':" ",
            'family_history':textInputFamilyHistory ,
            'a_cdisease':textInputA_Cdisease ,
            'emr':textInputEmr,
            'dob': textInputBOD,
            'insurance_number':textInputInsureN,
            'private_history':"PRIVATE",
            'defaulttoprivate':0,}
            console.log(eee);
            fetch('http://192.168.1.11:8000/api/patient-create/',{
              method:'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
                body:JSON.stringify(eee)  
            }).then((response) => response.json())
                .then((res) => {
                  let responsess= res ;
                  if(responsess.id[0]==="patient with this id already exists."){
                    alert("Patient with this ID already exists")
                  }
                  console.log(responsess.id[0]);
                }).catch  ((e) => {
                 console.log(e);
               });
        }
            
return (
        <SafeAreaView style={styles.MainC}>
        <ScrollView  style={{backgroundColor:colors.secondary,borderRadius:30,height:"95%"}}> 
        <TextInput style ={styles.Textinputstyle}
        placeholder={"Enter Paitant's ID"}
        onChangeText={ (value) => setTextInputID(value)}
        />
        <TextInput style ={styles.Textinputstyle}
        placeholder={"Enter Paitant's Password"}
        onChangeText={ (value) => setTextInputPass(value)}
        />
        <TextInput
         placeholder={"Enter Paitant's Name"} style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputName(value)}
         />
        <TextInput
         placeholder={"Enter Paitant's Birth Date"} style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputBOD(value)}
         /> 
        <TextInput 
         placeholder={"Enter Paitant's Gender"}style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputGender(value)}
         />
        <TextInput
         placeholder={"Enter Paitant's City"} style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputCity(value)}
         />
        <TextInput 
         placeholder={"Enter Paitant's Contact Info"}style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputCinf(value)}
         />
        <TextInput 
         placeholder={"Enter Paitant's BloodType"}style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputBloodType(value)}
         /> 
        <TextInput
         placeholder={"Enter Paitant's  Weight"} style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputWeight(value)}
         /> 
        <TextInput
         placeholder={"Enter Paitant's  Hieht"} style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputHieht(value)}
         /> 
        <TextInput
         placeholder={"Enter Paitant's Ailergy and Cronic Deasease"} style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputA_Cdisease(value)}
         /> 
        <TextInput
         placeholder={"Enter Paitant's Emergancy info"} style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputEmr(value)}
         />
        <TextInput 
         placeholder={"Enter Paitant's Insuurance number"}style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputInsureN(value)}
         />    
        <TextInput 
         placeholder={"Enter Paitant's FamilyHistory"}style ={styles.Textinputstyle}
         onChangeText={ (value) => setTextInputFamilyHistory(value)}
         /> 
            </ScrollView >
            <View style={{padding:5 ,flex:1,borderRadius:33}}>
            <Button 
            title="Add Paitant"
            onPress={checkTextInput}
            color="tomato" 
          /></View>
        </SafeAreaView>

    );
}   
const styles = StyleSheet.create({
    MainC:{
        flex:1,
        backgroundColor:colors.primary,
        padding: 8,
    },
    Textinputstyle:{
        width:"60%",
        borderBottomWidth:0.5,
        margin:10,
        marginVertical:13,

    },

})
export default DrProfile;
