import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import CloseIcon from "grommet/components/icons/base/Close";

const backgroundAnimation = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

const ModalWindow = styled.div`
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const ModalBackground = styled.div`
  animation: ${backgroundAnimation} 0.5s linear;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShadowDiv = styled.div`
  box-shadow: 0 30px 50px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

class Modal extends Component {
  render() {
    return (
      <ModalBackground onClick={this.props.close}>
        <ModalWindow>
          <div onClick={this.props.close} style={{ cursor: "pointer" }}>
            <CloseIcon size="small" colorIndex="light-1" />
          </div>

          <ShadowDiv>
            <iframe
              style={{ borderRadius: 5, display: "block" }}
              width={window.innerWidth < 854 ? window.innerWidth - 50 : 854}
              height={
                window.innerWidth < 854 ? window.innerWidth / 1.77916667 : 480
              }
              src="https://www.youtube.com/embed/HvzyeukKeL4?ecver=1"
              frameborder="0"
              gesture="media"
              allowFullScreen
            />
          </ShadowDiv>
        </ModalWindow>
      </ModalBackground>
    );
  }
}

export default Modal;
