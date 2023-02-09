import { TbArrowBackUp } from "react-icons/tb";
import styled from "styled-components";


export const Container = styled.div`
  display: Flex;
  top: 50px;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Number = styled.p`
  font-size: 150px;
  color: ${props => props.color};
  font-weight: bolder;
  margin: 0;
  filter: drop-shadow(0px 0px 25px red);
`

export const Error = styled.p`
  color: ${props => props.color};
  font-size: 25px;
  letter-spacing: 2px;
  margin: 0;
  opacity: .9;
`

export const Back = styled(TbArrowBackUp)`
  margin-top: 30px;
  display: flex;
  z-index: 1;
  color: ${props=> props.color};
  left: 30px;
  font-size: 70px;
  filter: drop-shadow(0 0px 2px ${props=> props.fds});
  cursor: pointer;

  &:hover{
    transform: scale(1.06);
    filter: drop-shadow(0 0px 4px ${props=> props.hfds});
  }
  @media (max-width: 480px){
  font-size: 70px;
  left: 89.1%;
  }
  `