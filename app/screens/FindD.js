import React from 'react';
import { View,StyleSheet,SafeAreaView,TouchableHighlight,Image,Text} from 'react-native';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';

function FindD(props) {
     const navigation = useNavigation(); 
    return (
        <SafeAreaView style={styles.MainC}>
            <Text></Text>
            <View style={styles.Sec}>
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"General medicine",})}}>
                <View>
                    <Image source={require("../assets/1639328.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>General medicine</Text>
                </View> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"Urologist",})}}>
                <View>
                    <Image source={require("../assets/urology-1960429-1655542.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>Urologist</Text>
                </View> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"Midwife & child Care",})}}>
                <View>
                    <Image source={require("../assets/wife.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>Midwife & child Care </Text>
                </View> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"Digestive System",})}}>
                <View>
                    <Image source={require("../assets/gas.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>Digestive System </Text>
                </View> 
                </TouchableHighlight >
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"Dentist",})}}>
                <View>
                    <Image source={require("../assets/d.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}> Dentist</Text>
                </View> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"Inner medicine",})}}>
                <View>
                    <Image source={require("../assets/internal.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>Inner medicine</Text>
                </View> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttons}  onPress={()=>{navigation.navigate("DrList",{
               Sp:"Brain and nural Doctor",})}}>
                <View>
                    <Image source={require("../assets/Nu.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>Brain and nural Doctor</Text>
                </View> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"Bone Doctor",})}}>
                <View>
                    <Image source={require("../assets/mediz_Orthopaedics-512.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>Bone Doctor</Text>
                </View> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"Heart Doctor",})}}>
                <View>
                    <Image source={require("../assets/doctor.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>Heart Doctor</Text>
                </View> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttons} onPress={()=>{navigation.navigate("DrList",{
               Sp:"Childern Doctor",})}}>
                <View>
                    <Image source={require("../assets/CD.png")} style={styles.iconStyle}/>
                    <Text style={styles.TextIbputstyle}>Childern Doctor</Text>
                </View> 
                </TouchableHighlight>
            </View>

        </SafeAreaView>
 
    );
}
const styles = StyleSheet.create({
    MainC:{
        backgroundColor:colors.primary,
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
        
    Sec:{
    backgroundColor:colors.primary,
     width:"70%",
     height:"45%",
     flexDirection:"column-reverse",
     borderRadius:15,
    },
    buttons:{
        borderRadius:13,
        flex:0.1,
        backgroundColor :colors.White,
        borderWidth:.4,
        margin:5
    },
    iconStyle:{
        width:50,
        height:24,
        margin:1.5,
        resizeMode:'contain',
        position:"absolute",
    },
    TextIbputstyle:{
        position:"absolute",
        left:"33%",
        marginVertical:2,
        fontWeight:"bold"
    }

    
})
export default FindD;