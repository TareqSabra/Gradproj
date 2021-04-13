import React from 'react';
import { FlatList,StyleSheet,StatusBar, } from 'react-native';
import listSeperate from './listSeperate';

function ListingScreen(props) {
    return (
        <view style={styles.screen}>
       <FlatList data={} keyExtractor ={} renderItem={({})}
        ItemSeparatorComponent={listSeperate}>


       </FlatList>
    
    </view>
    );
}

const styles = StyleSheet.create({
    screen:{
    paddingTop = StatusBar.currentHeight,
    
    },

    
})
export default ListingScreen;