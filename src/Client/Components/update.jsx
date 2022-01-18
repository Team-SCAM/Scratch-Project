import React from 'react'
const UpdateEvent = () => {
  return (
  <div>
    <input type="text" placeholder= {retrievedEvent.title} style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
    <input type="text" placeholder= {retrievedEvent.weight} style={{ width: "20%", marginRight: "10px" }} value={newEvent.weight} onChange={(weight) => setNewEvent({ ...newEvent, weight: weight.target.value })} />
    <input type="text" placeholder= {retrievedEvent.reps} style={{ width: "20%", marginRight: "10px" }} value={newEvent.reps} onChange={(reps) => setNewEvent({ ...newEvent, reps: reps.target.value })} />
    <DatePicker placeholder= {retrievedEvent.start} style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
    <DatePicker placeholder= {retrievedEvent.end} selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
    <button className = "AddExercise" style={{ marginTop: "50px" }} onClick={handleAddEvent}>
      Add Exercise
    </button>
  </div>
  )
}
export default UpdateEvent;