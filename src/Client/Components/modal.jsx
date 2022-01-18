import React from 'react'

const Modal = ({display, handleClose}) => {//replace handleclose with something from redux? or just leave as is.
//run a retrieveOne to get the "type" of modal to be displayed and then display that?

return(
<div className = "modal">
      <section className="modal-main">
        {display}
      </section>
      <button className= "button" type="button" onClick={handleClose}>
        Close
      </button>
    </div>
)
};
export default Modal;