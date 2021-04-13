import React,{useState} from 'react';
import { View,StyleSheet,TextInput } from 'react-native';
import { Input ,Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors"
import { useNavigation } from '@react-navigation/native';
console.ignoredYellowBox=true; 
console.ignoredYellowBox=["Looks like you're passing an inline function for 'component'"]
function DrNewS({ID,SP}) {
    const [PID, setPID] = useState('');
    const navigation = useNavigation();
   
    var ButtonPressed =()=>{
    navigation.navigate("NewS",{
        ID:ID,
        PtId:PID,
        SP:SP
    })
    }
    return (
       <SafeAreaView style={styles.MainC}>
       <TextInput 
       placeholder="Pitant ID"
       onChangeText={PID => setPID(PID)}
       defaultValue={PID}
       style ={{width:"60%",borderBottomWidth:0.5,margin:10}}
       />
        <Button
        title="Start Session "
         type="solid"
         onPress={ButtonPressed}
         />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    MainC:{
        backgroundColor: colors.primary,
        flex:1,
        padding:20,
        alignContent:"center",
        alignItems:"center",
    },
})
export default DrNewS;