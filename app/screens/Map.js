import React , {useState,useEffect} from 'react';
import {StyleSheet,Dimensions,SafeAreaView} from 'react-native';
import MapView ,{ Marker }from 'react-native-maps';
import * as Location from 'expo-location';

function Map(props) {
    const [location, setLocatione] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    var [latitude, setlatitude] = useState(32.2233873);
    var [longitude, setlongitude] = useState(35.2415928);
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocatione(location);
        setlatitude(location.coords.latitude);
        setlongitude(location.coords.longitude);

      })();
    }, []); 
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);

    }
    
    return (
    <SafeAreaView style={styles.container}>
    <MapView  initialRegion={{
      latitude: latitude,
      longitude:longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.01,
    }} 
   style={styles.map}>
     <MapView.Marker
    coordinate={{ "latitude":latitude,   
    "longitude":longitude }}
    title={"Your Location"}
    draggable />
  
   </MapView>
   
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
export default Map;