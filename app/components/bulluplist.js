import React from 'react';
import { View,StyleSheet,Alert } from 'react-native';
import { Button} from 'react-native-elements';
import colors from '../config/colors';

function bulluplist({onPress}) {
    return (
        <View style={styles.continer}>
        <Button
        title="Log in"
        type="outline"
        titleStyle ={{textAlign:"center",color:"#fff"}}
        buttonStyle={{width: "75%",backgroundColor:colors.buttonColor,borderRadius: 17,}}
        containerStyle ={{width:"80%",paddingLeft:"15%",margin:15}}
        onPress={()=>{Alert.alert("i'm clicked")}}/>
        <Button
        title="map"
        type="outline"
        titleStyle ={{textAlign:"center",color:"#fff"}}
        buttonStyle={{width: "75%",backgroundColor:colors.buttonColor,borderRadius: 17, }}
        containerStyle ={{width:"80%",paddingLeft:"15%",margin:15}}
        />
        <Button
        title="Find a Doctor"
        type="outline"
        titleStyle ={{textAlign:"center",color:"#fff"}}
        buttonStyle={{width: "75%",backgroundColor:colors.buttonColor,borderRadius: 17 }}
        containerStyle ={{width:"80%",paddingLeft:"15%",margin:15}}
        />
        <Button
        title="Emergancy information"
        type="outline"
        titleStyle ={{textAlign:"center",color:"#fff",}}
        buttonStyle={{width: "75%",backgroundColor:colors.buttonColor,borderRadius: 17 }}
        containerStyle ={{width:"106%",paddingLeft:"20%",margin:15}}
        
        />
        </View>
    );
}

const styles = StyleSheet.create({
    continer:{
        alignItems: "center",
        justifyContent: "center",
        alignContent :"center",
        position : "absolute",
        top :"30%",
        left:"10%",
    }
    
})
export default bulluplist;