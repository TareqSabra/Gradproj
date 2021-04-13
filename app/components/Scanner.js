import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner({ID,NAME}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeScanned =async({ data }) => {
    
    fetch('http://192.168.1.11:8000/api/treats-create/'+data+'/'+NAME+'/'+ID)
          .then((response) => response.json())
          .then((res) => {
            if(res.length<1){
            console.log("Faggot");
            }
            else{
              console.log(res);
            }
            //console.log("between")
           // console.log(List)
       }).catch  ((e) => {
          console.log(e);
        })
    setScanned(true);
    alert(` Qr code with data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
