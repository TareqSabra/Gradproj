import React,{useState,useEffect} from 'react';
import { Rating} from "react-native-elements";
import { View ,StyleSheet} from 'react-native';

function Rated({Rate,editable,Color,DCID,PID}) {
  var ratingCompleted = async(rating)=>{
    fetch('http://192.168.1.11:8000/api/rating-update/'+DCID+'/'+PID+'/'+rating)
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          if(res.length<1){
          console.log("Faggot");
          }
          else{
         Setlist(res)
         console.log(List)
         console.log(res)
        }
     }).catch  ((e) => {
        console.log(e);
      })
     console.log("Rating is: " + rating)
  }
  
  return (
<Rating 
  showRating ={false}
  onFinishRating={ratingCompleted}
  tintColor = {Color}
  style={{paddingHorizontal:-10,paddingVertical:15}}
  readonly = {editable}
  startingValue = {Rate}
  
/>
  );
}
const styles = StyleSheet.create({
    ratethingy :{
        paddingVertical: 10,
    },

})

export default Rated;