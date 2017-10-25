import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3
        }}
      >
        <iframe
          width="854"
          height="480"
          src="https://www.youtube.com/embed/HvzyeukKeL4?ecver=1"
          frameborder="0"
          gesture="media"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Modal;
