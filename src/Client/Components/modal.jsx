import React from 'react'

const Modal = ({display, handleClose}) => {//replace handleclose with something from redux? or just leave as is.
//run a retrieveOne to get the "type" of modal to be displayed and then display that?

return(
<div className = "modal"
  style={{ 
    backgroundImage: `url("https://media.istockphoto.com/vectors/sport-people-doing-exercise-in-gym-vector-flat-graphic-design-icon-vector-id1160408966?k=20&m=1160408966&s=170667a&w=0&h=6tGWiKGrTHsvv-nPsS-nKnN-dihdZhpBwl5GeDT5ppE=")`
  }}>
    <section className="modal-main">
        {display}  
        <h3> "You are one workout away from a better mood" </h3>  
        <button className= "button" type="button" onClick={handleClose}> Close </button>
      </section>
        <button className = "Dance" type = "button"><img src="https://c.tenor.com/qdX18JQixl8AAAAC/my-neighbor-totoro-exercise.gif" alt="Dancing Totoro"/> </button>
    
    </div>
)
};
export default Modal;