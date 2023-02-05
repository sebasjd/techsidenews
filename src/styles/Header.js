import styled from "styled-components"
  
  export const Container = styled.div`
  background-color: ${props=> props.bgc};
  display: flex;
  position: fixed;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
  z-index: 1;

  @media (max-width: 480px){
  filter: drop-shadow(0 0px 2px ${props=> props.fds});
  }

  `
  export const Logo = styled.p`
  font-size: 40px;
  cursor: pointer;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 0%;
  margin: 0;
  `