import React ,{useEffect,useState}from 'react';
import { View,Text,Button } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Modal from 'react-native-modal';
import colors from "../config/colors";
function Calender({ID}) {
    console.log(ID)
    const [isModalVisible, setModalVisible] = useState(false);
    const [date, setdate] = useState('');
    const [Dr, setDr] = useState('');
    const [Time, setTime] = useState('');
    const [List,Setlist]=useState([])
    const [nextDays,SetDates]=useState([])
    //var nextDays=[]
    let newDaysObject = {};
    useEffect(() => {
      (async () => {
        fetch('http://192.168.1.11:8000/api/get-Docs-By-Patient-from-Appointments/'+ID)
        .then((response) => response.json())
        .then((res) => {
          if(res.length<1){
          console.log("Faggot");
          }
          else{
            res.forEach(element => nextDays.push(element.day))
         Setlist(res)
          }
     }).catch  ((e) => {
        console.log(e);
      })
      })();},[]); 
      console.log(nextDays);
      nextDays.forEach((day) => {
        newDaysObject[day] = {
            selected: true,
            marked: true
        };
      });
      console.log(newDaysObject);
    const toggleModal = async(day) => {
      fetch('http://192.168.1.11:8000/api/clander-op/'+ID+'/'+day)
      .then((response) => response.json())
      .then((res) => {
        if(res.length<1){
          
        }
        else{
            console.log(res[0].time);
            setTime(res[0].time)
            setDr(res[0].docname)
            setModalVisible(!isModalVisible);
            setdate(day);
        }
   }).catch  ((e) => {
      console.log(e);
    })

        
      };
      const exit =()=>{
        setModalVisible(!isModalVisible);
      }
    return (
        <View>
          <Modal  isVisible={isModalVisible}>
          <View style={{flex:0.2,backgroundColor:colors.White,alignItems: "center",}}>
          <Text style={{fontSize:17 ,fontWeight:"bold",margin:5,}}>You have an appointment with Dr {Dr} at {Time} At  {date} </Text>
          <View style={{position:"absolute",bottom:0,margin:10}}>
         
          <Button title="ok" onPress={exit} />
           
          </View>
          </View>
        </Modal>
            <Calendar  
            markedDates={newDaysObject}
             onDayPress={(Day) => {toggleModal(Day.dateString,)}}>
           </Calendar>
              
        </View>
    );
}
export default Calender;