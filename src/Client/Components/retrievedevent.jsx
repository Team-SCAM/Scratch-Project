import React from 'react'
const RetrievedEvent = (props) => {//handleupdate from redux also please add prop names in the delete AJAX call
  // let updatePlaceHolder;
 const handleDelete = () => {
  fetch(`/calendar/${retrievedEvent._id}`, {
        method: 'DELETE',
      })
    .then(data => {
      console.log(data);
      })
    .then(() => {
      fetch("http://localhost:8080/retrieveAll")
      .then(res => res.json())
      .then(
        (result) => {
          props.eventList
          })})
      .then(handleClose())
 };
//  const handleUpdate = () => {
//   updatePlaceHolder = (
//     <UpdateEvent />
//   )
//  }

return (
  <div className= "retrievedEvent">
    {props.retrievedEvent}
    <div>
      {updatePlaceHolder}
    </div>
    <button className= "button" type="button" onClick={handleClose}>
      Close
    </button>
    <button className= "button" type="button" onClick={handleDelete}>
      Delete
    </button>
    //will need to gather input and pass it into updateEvent to actually update information
    <button className= "button" type="button" onClick={props.updateEvent()}>
      Update
    </button>
  </div>
)


}
export default RetrievedEvent;