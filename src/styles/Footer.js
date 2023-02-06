import styled from "styled-components";

export const Container = styled.div`
  margin-top: 300px;
  width: 100%;
  height: 300px;
  background-color: ${props => props.bgc};
  display: flex;
  flex-direction: row;
`