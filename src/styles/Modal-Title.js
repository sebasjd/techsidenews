import styled from "styled-components";

export const Modal = styled.div`
  z-index: 10;
  display: flex;
  position: fixed;
  background: ${props => props.bc};
  color: ${props => props.color};
  top: 50px;
  width: 100%;
  height: 80px;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${props => props.showModal && "buton-flicker 5s linear"};
  animation-fill-mode: forwards;

  @keyframes buton-flicker{
    0% { opacity:  0; }
    15% {opacity:  1; }
    80% {opacity:  1; }
    100% {opacity:  0; }
}
`