import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  position: relative;
  top: 60px;
  width: 90%;
  height: minmax(90vh, auto);

  @media (max-width: 480px){
    width: 100%;
  }
`

export const TextAbout = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 2;
  width: 90%;
  color: ${props=> props.color};
  opacity: .8;
  transform: translate(5%);
  white-space: pre-wrap;
`