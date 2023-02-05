import styled from "styled-components";


export const MenuButton = styled.div`
display: flex;
position: fixed;
z-index: 1;
color: ${props=> props.color};
left: 30px;
font-size: 35px;
top: 10px;
filter: drop-shadow(0 0px 2px ${props=> props.fds});
cursor: pointer;

&:hover{
  transform: scale(1.06);
  filter: drop-shadow(0 0px 4px ${props=> props.hfds});
}
@media (max-width: 480px){
font-size: 40px;
top: 51px;
left: 89.1%;
background-color: ${props=> props.mbgc};
}
`
