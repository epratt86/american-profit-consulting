import React from "react"

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose} className="modal-button">
          X
        </button>
        <br />
        {children}
      </section>
    </div>
  )
}

export default Modal
