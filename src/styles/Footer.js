import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 300px;
  width: 100%;
  height: 300px;
  background-color: ${props => props.bgc};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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