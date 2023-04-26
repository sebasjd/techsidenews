import styled from "styled-components";

export const Advertisement = styled.div`
display: flex;
font-size: 50px;
width: 80%;
height: 300px;
background-image: url(${props=>props.img});
background-position: center;
align-items: center;
justify-content: space-around;
border-radius: 5px;

  @media (max-width: 915px){
    width: 96%;
  }
`