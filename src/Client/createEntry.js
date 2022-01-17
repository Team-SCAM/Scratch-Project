// import React, { useState } from 'react';

// const CreateEntry = ({handleClose, useInput}) => {
//     const [workout, workoutOnChange] = useInput('');
//     const [weight, weightOnChange] = useInput('');
//     const [height, heightOnChange] = useInput('');
  
//    const handleSubmit = () =>{
//     const sendBody = { title: title, weight: weight, reps: reps, start: start, end: end}
//     fetch('/workout/new', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'Application/JSON'
//           },
//           body: JSON.stringify(sendBody)
//         })
//       .then(resp => resp.json())
//       .then(data => {
//         console.log(data);
//         })
//       .then(handleClose())
//    }
  
  
//   return(<form onSubmit={handleSubmit}>
//           <h2>
//             Title:
//             <input className= "titleInput" type="text" value={title} onChange={titleOnChange} />
//           </h2>
//           <h2>
//             Body:
//             <textarea rows= "20" className= "bodyInput" type="text" value={body} onChange={bodyOnChange} />
//           </h2>
//           <input id= 'button' className= "button" type="submit" value="Submit" />
//           <button className= "button" type="button" onClick={handleClose}>
//           Close
//           </button>
//         </form>)
  
  
//   }
// export default createEntry;