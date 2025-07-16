import Header from "../components/Header";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';

function AddEvent() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("10:00");
    return(
        <main>
            
           <Header></Header> <h1>Create Event</h1>
           
           <div class="card">
            <div className="card-content">
                 <h3>Event Information</h3>
               <input type="text" placeholder="Event Name"></input>
            <input type="text" placeholder="Event Type"></input>
            
            <h3>Event Location</h3>
            <input type="text" placeholder="Building Located"></input>
            <input type="text" placeholder="Room Number or Name"></input>
            
            <h3>Event Time</h3>
            <DatePicker class="date-picker" selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}></DatePicker>
          <TimePicker class="time-picker" value={selectedTime}
          onChange={(time) =>{
            if(time){
                setSelectedTime(time);
            }}} clearIcon={null}></TimePicker>
           </div> <br/>

            <button>Add Event</button>
            
           </div>

           </main>
        
    )
}

export default AddEvent;