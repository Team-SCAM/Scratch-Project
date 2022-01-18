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
import RetrievedEvent from "./Components/retrievedevent";
import Modal from './Components/modal';
import Login from './Components/login';
import UpdateEvent from './Components/update'
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({ 
    format, parse, startOfWeek, getDay, locales,
});

const mapStateToProps = state => ({
  totalEvents: state.workouts.totalEvents,
  eventsList: state.workouts.eventsList,
  retrievedEvent: state.workouts.retrievedEvent,
  showModal: state.modals.showModal,
})

const mapDispatchToProps = dispatch => ({
  createEvent: eventInfo => actions.createEventActionCreator(dispatch, eventInfo),
  updateEvent: eventInfo => actions.updateEventActionCreator(dispatch, eventInfo),
  retrieveAllEvents: () => actions.retrieveAllEventsActionCreator(dispatch),
  retrieveOneEvent: id => actions.retrieveOneEventActionCreator(dispatch, id),
  setShowModal: modalBool => dispatch(actions.setShowModalActionCreator(modalBool)),
})

const events = [];


const App = (props) => {
    const [newEvent, setNewEvent] = useState({ title: "", weight: "", reps: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const [display, setDisplay] = useState();
    const showHideclassName = props.showModal ? 'display-block' : 'display-none';

    
    useEffect(() => {
      props.retrieveAllEvents()
    }, [])

    for(let i = 0; i < props.eventsList.length; i++){
      events.push(props.eventsList[i]);
    }
      
    const handleAddEvent = async () => {
        await props.createEvent(newEvent);
    };

    const handleClose = () => {
      props.showModal === false ? props.setShowModal(true) : props.setShowModal(false)
    };

    //can we just call our props.retrieveOneEvent and pass in our login ID to display? Would save a lot of time. 
    const handleLogin = () => {
      setDisplay (
        <div>
          <Login handleClose={handleClose}/>   
        </div>
      )
      props.showModal === false ? props.setShowModal(true) : props.setShowModal(false)
    };
 
    
    const handleDisplayEvent = () => {
      if(id) {
        // fetch(`http://localhost:8080/articles/retrieveOne?id=${id}`)
        // .then(res => res.json())
        // .then(
        // (result) => {
        //   props.retrieveOneEvent(result) 
        // },
        // (error) => {
        //   props.retrieveOneEvent({title: `Failed to load article!${error}`})
        // }
        // )
        // .then(props.showModal === false ? props.setShowModal(true) : props.setShowModal(false))

        props.retrieveOneEvent(id)
        //from here, our retrieved event is accessible via props.retrievedEvent
    };
      setDisplay (
        <div>
          <RetrievedEvent handleClose={props.setShowModal} updateEvent={props.updateEvent} retrievedEvent={props.retrievedEvent}/>   
        </div>
      )
    }
    //can we just call our props.retrieveOneEvent and pass in our signUp ID to display? Would save a lot of time. 
    const handleSignUp = (props) => {
      setDisplay (
        <div>
          <SignUp handleClose={handleClose}/>   
        </div>
      )
    props.showModal === false ? props.setShowModal(true) : props.setShowModal(false)
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
                <button className = "AddExercise" style={{ marginTop: "50px" }} onClick={handleAddEvent}>
                    Add Exercise
                </button>
                <a href="https://gif-free.com/uploads/posts/2017-06/1497503228_totoro-on-run.gif">
                <button>A Sweat Friend</button>
                    </a>
                <a href="https://s10.gifyu.com/images/IMG_1434.gif">
                <button>Cardio Exercises</button>
                    </a>
                    <a href="https://i.pinimg.com/originals/17/17/dc/1717dc8e3d515b73867be0938bbbab55.jpg">
                <button>Upper Body</button>
                    </a>
                    <a href="https://callisto.ggsrv.com/imgsrv/FastFetch/UBER1/9781410379764_00108">
                <button>Lower Body</button>
                    </a>
            </div>
            <div>
              <button style={{ marginTop: "50px" }} onClick={handleLogin}>
                    Login/Sign Up
                </button>
            </div>
            <Calendar localizer={localizer} events={props.eventsList} startAccessor="start" endAccessor="end" style={{ height: 800, margin: "50px" }} />
            <div className={showHideclassName}>
            <Modal display={display} handleClose={handleClose} />
            </div>
        
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