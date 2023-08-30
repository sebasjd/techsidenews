import styled, { keyframes } from "styled-components"


const OpenDesk = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
  `

  const CloseDesk = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
  `
  const OpenMobile = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
  `

  const CloseMobile = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

export const Container = styled.div`
  display: flex;
  padding-top: 100px;
  align-items: center;
  position: fixed;
  flex-direction: column;
  height: 100%;
  width: 350px;
  background-color: ${props=>props.bgc};
  z-index: 2;
  color: ${props=>props.color};
  gap: 5px;
  /* animation: ${props=>props.menuState? OpenDesk : CloseDesk} .3s ease-in-out forwards; */
  animation: ${props=>props.menuState? CloseDesk : OpenDesk} .3s ease-in-out forwards;

  @media (max-width: 480px){
    top: 50px;
    width: 100%;
    /* animation: ${props=>props.menuState? OpenMobile : CloseMobile} .3s ease-in-out forwards; */
    animation: ${props=>props.menuState? CloseMobile : OpenMobile} .3s ease-in-out forwards;
  }
`
export const CloseButton = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  color: ${props=>props.color};
  font-size: 35px;
  top: 10px;
  right: 20px;
  filter: drop-shadow(0 0px 2px ${props=>props.fds});
  cursor: pointer;

  &:hover{
    transform: scale(1.06);
    filter: drop-shadow(0 0px 4px ${props=>props.hfds});
  }
  @media (max-width: 480px){
    font-size: 40px;
    top: 15px;
    left: 10px;
    background-color: ${props=>props.mbg};
    width: 40px;
  }
`
