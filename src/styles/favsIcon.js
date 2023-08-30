import styled from "styled-components";

export const FavsIcon = styled.div`
display: flex;
position: fixed;
z-index: 1;
color: yellow;
right: 30px;
font-size: 40px;
top: 10px;
filter: drop-shadow(0 0px 2px white);
cursor: pointer;

&:hover{
  transform: scale(1.06);
  filter: drop-shadow(0 0px 4px white);
}
@media (max-width: 480px){
  font-size: 40px;
  top: 110px;
  left: 89.1%;
  right: 0px;
  background-color: ${props=> props.mbgc};
  filter: drop-shadow(0 0px 2px ${props=> props.fds});
}
`