import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px 0 30px 0;
  gap: 20px;
  margin-top: 300px;
  width: 100%;
  height: auto;
  background-color: ${props => props.bgc};
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 630px){
    justify-content: stretch;
    padding-left: 20px;
    gap: 60px;
  }
`
export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${props=>props.color};
  opacity: .9;
  font-size: 15px;
  letter-spacing: 2px;
  white-space: pre-wrap;
  cursor: pointer;
`