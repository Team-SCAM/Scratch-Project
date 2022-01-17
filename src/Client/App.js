// import React from "react";

// const App = () => ( 
//     <div>
//         <h1>Hello React</h1>
//     </div>
// );


// export default App;
//backend rules all
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import "./App.css";
import "./createEntry.js";
import "babel-polyfill";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({ 
    format, parse, startOfWeek, getDay, locales,
});

const mapStateToProps = state => ({
  totalEvents: state.workouts.totalEvents,
  eventsList: state.workouts.eventsList
})

const mapDispatchToProps = dispatch => ({
  createEvent: eventInfo => actions.createEventActionCreator(dispatch, eventInfo),
  retrieveAllEvents: () => actions.retrieveAllEventsActionCreator(dispatch),
  retrieveOneEvent: () => actions.retrieveOneEventActionCreator(dispatch)
})

const events = [
    // {
    //     title: "Workout1",
    //     allDay: true,
    //     weight: Number,
    //     reps: Number,
    //     start: new Date(2021, 6, 0),
    //     end: new Date(2021, 6, 0),
    // },
    // {
    //     title: "Workout2",
    //     weight: Number,
    //     reps: Number,
    //     start: new Date(2021, 6, 7),
    //     end: new Date(2021, 6, 10),
    // },
    // {
    //     title: "Workout3",
    //     weight: Number,
    //     reps: Number,
    //     start: new Date(2021, 6, 20),
    //     end: new Date(2021, 6, 23),
    // },
];



const App = (props) => {
    const [newEvent, setNewEvent] = useState({ title: "", weight: "", reps: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    useEffect(() => {
      props.retrieveAllEvents()
    }, [])

    for(let i = 0; i < props.eventsList.length; i++){
      events.push(props.eventsList[i]);
    }
      
    const handleAddEvent = async () => {
        // setAllEvents([...allEvents, newEvent]);
        await props.createEvent(newEvent);
        // await props.retrieveAllEvents();
    }

    return (
        <div className="App"
        style={{ 
            backgroundImage: `url("https://imgix.bustle.com/uploads/shutterstock/2020/3/11/5db1bc6b-4d71-4000-951f-eb147257fc21-shutterstock-1667721061.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress")`
          }}>
            <h1>Sweat Check</h1>
            <h2>Keep Track of Those GAINS</h2>
            <div>
                <input type="text" placeholder="Add Workout" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <input type="text" placeholder="Add Weight" style={{ width: "20%", marginRight: "10px" }} value={newEvent.weight} onChange={(weight) => setNewEvent({ ...newEvent, weight: weight.target.value })} />
                <input type="text" placeholder="Add Reps" style={{ width: "20%", marginRight: "10px" }} value={newEvent.reps} onChange={(reps) => setNewEvent({ ...newEvent, reps: reps.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button style={{ marginTop: "50px" }} onClick={handleAddEvent}>
                    Add Exercise
                </button>
            </div>
            <Calendar localizer={localizer} events={props.eventsList} startAccessor="start" endAccessor="end" style={{ height: 800, margin: "50px" }} />
        </div>
    );
}

//hooks are designed to add state into a functional component without having to convert it into a class
//useState declares a state variable (our state is called newEvent)
//doesn't have to be an object, but can be (we use object anyways)
// const [newEvent, setNewEvent] = useState({ title: "", weight: "", reps: "", start: "", end: "" }); is similar to this.state.newEvent and this.setState
//gives us the current state

//we set our current state to allevents, passing in the array "events"

//handleAddEvent creates a shallow copy and adds in the new event. so when we click on the "add exercise" button, it sets all the copies of past events and adds the new event

//DatePicker and Calendar were both react components that were installed.

export default connect(mapStateToProps, mapDispatchToProps)(App);