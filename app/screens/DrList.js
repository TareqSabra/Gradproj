import React from 'react';
import { View,Text,StyleSheet, SafeAreaView,ScrollView } from 'react-native'; 
import { ListItem, Avatar} from 'react-native-elements';
import Rank from "../components/Rating";
import colors from '../config/colors';
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    Adress: 'Adress1',
    Phone: 'Phone1',
    ranking : 5
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    Adress: 'Adress1',
    Phone: 'Phone2',
    ranking :  3
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    Adress: 'Adress1',
    Phone: 'Phone3',
    ranking :  2
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    Adress: 'Adress1',
    Phone: 'Phone3',
    ranking :  2
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    Adress: 'Adress1',
    Phone: 'Phone1',
    ranking : 1.5
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    Adress: 'Adress1',
    Phone: 'Phone1',
    ranking : 1.2
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    Adress: 'Adress1',
    Phone: 'Phone1',
    ranking : 1
  },
]
function DrList({route}) {
  const {Sp} = route.params
    return (
      <SafeAreaView style={styles.MainC}>
        <View style={styles.Titel}>
        <Text style={styles.Font}>{Sp}s</Text>
        </View>
      <ScrollView style={{width:"100%",height:"90%",position:"absolute",bottom:0}}>
      {
        list.map((l, i) => (
          <ListItem onPress key={i} bottomDivider  style={{backgroundColor:colors.primary}} onPress={()=>{console.log(l.name)}}>
            <Avatar source={{uri: l.avatar_url}}/>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.Adress}</ListItem.Subtitle>
              <ListItem.Subtitle>{l.Phone}</ListItem.Subtitle>
              <Rank Rate={l.ranking} editable={true} Color={colors.White}/>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </ScrollView>
    </SafeAreaView >
    );
}
const styles = StyleSheet.create({
  MainC:{
    backgroundColor :colors.primary,
    flex:1,
    alignContent:"center",
    justifyContent:"center"

  },
  Titel:{
  position:"absolute",
  top:"5%",
  left:"20%",
  backgroundColor:colors.White,
  alignItems:"center",
  borderRadius:12
  },
  Font:{
   fontWeight:"bold",
   fontSize:25
    },
})
export default DrList;