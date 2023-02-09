import styled from "styled-components"


export const Container = styled.div`
display: flex;
position: relative;
flex-direction: column;
border: solid 1px ${props=> props.border};
border-radius: 3% 3% 0 0;
height: 440px;
width: 350px;
overflow: hidden;
box-shadow: 0px 0px 12px 1px black;
transition: .3s;
cursor: pointer;
user-select: none;

&:hover{
  background-color: ${props=> props.hbgc};
  transform: scale(1.005);
}
`
export const Img = styled.img`
  height: 40%;
  box-shadow: 0px 0px 20px 0px ${props=> props.bs};
  image-rendering: optimizeSpeed;
  object-fit: cover;
`
export const Title = styled.p`
  text-align: start;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin: 5px 10px 0px 10px;
  line-height: 1.1;
`
export const Epigraph  = styled.p`
text-align: start;
color: ${props=> props.color};
font-size: 1rem;
margin: 10px;
letter-spacing: .5px;
`