import React from 'react';
import { View ,Image,Text} from 'react-native';
import colors from './config/colors';
function card(title,subTitle,image) {
    return (
       <View style={styles.card}>
       <Image source={require(image)}></Image>
       <View style={styles.StyleContainor}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.subTitle}>{subTitle}</Text>
       </View>
       <View>
           //add_rating_here
       </View>
       </View>
       
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor:colors.White,
        borderRadius:15,
        marginBottom : 20,
        overflow:"hidden",
        
    },
    image :{
        width :"100%",
        height:200,

    },
    StyleContainor :{
        padding:20
    },
    title :{
       marginBottom :7 
    },
    subTitle :{
        fontWeight :"bold",
        color : colors.buttonColor,

    }

    
})
export default card;