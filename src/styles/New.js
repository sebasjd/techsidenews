import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  top: 60px;
  width: 90%;
  height: minmax(90vh, auto);
  
  @media (max-width: 480px){
    width: 100%;
  }
`

export const Img = styled.img`
  max-height: 25rem;
  width: auto;
  filter: drop-shadow(0px 0px 50px ${props=> props.bs});
  image-rendering: optimizeSpeed;
  object-fit: contain;
`

export const Title = styled.p`
  text-align: center;
  color: ${props=> props.color};
  font-weight: bold;
  font-size: 35px;
  letter-spacing: 4px;
  margin: 30px 10px 0px 10px;
  line-height: 1.5;

`

export const Text = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 2;
  margin-top: 40px;
  width: 90%;
  color: ${props=> props.color};
  opacity: .8;
  transform: translate(5%);

`