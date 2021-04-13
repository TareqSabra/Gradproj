import React ,{useEffect}from 'react';
import { View } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
const registerForPushNotifications = async () => { 
    try {
       const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
       if (!permission.granted) return;
       const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    } catch (error) {
      console.log('Error getting a token', error);
    }
  }
function Notify(props) {
    useEffect(() => {
        registerForPushNotifications();
      }, [])
    return (
       <View>

       </View>
    );
}
const styles = StyleSheet.create({
    
})
export default Notify;