import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.form`
  position: relative;
  flex-direction: column;
  top: 100px;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContactInput = styled.input`
  display: flex;
  position: relative;
  border: inset 1px ${props=>props.bc};
  outline: none;
  background-color: transparent !important;
  height: 25px;
  width: 85%;
  max-width: 350px;
  color: ${props=>props.color2};
  font-size: 18px;
  text-align: start;
  padding: 5px 10px;
  margin-bottom: 10px;
  letter-spacing: 2px;
  transition: all .3s;

  &:focus{
    color: ${props=>props.color};
    font-size: 20px;  
    border: inset 1px ${props=>props.bc2};
    box-shadow: 3px 3px 5px .2px ${props=> props.color2};
  }
`

export const TextArea = styled.textarea`
  display: flex;
  position: relative;
  border: inset 1px ${props=>props.bc};
  outline: none;
  background-color: transparent;
  height: 120px;
  width: 85%;
  padding: 5px 10px;
  max-width: 350px;
  color: ${props=>props.color2};
  font-size: 18px;
  text-align: start;
  white-space: pre-line;
  letter-spacing: 2px;
  overflow-y: visible;
  transition: all .3s;
  margin-bottom: 5px;
  
&:focus{
  color: ${props=>props.color};
  font-size: 20px;  
  border: inset 1px ${props=>props.bc2};
  box-shadow: 3px 3px 5px .2px ${props=> props.color2};
}
`

export const Label = styled.label`
  display: flex;
  position: relative;
  color: ${props=>props.color2};
  font-size: 20px;
  text-align: left;
  width: 85%;
  max-width: 350px;
  letter-spacing: 2px;
`

export const Button = styled.button`
  background-color: ${props=>props.bgc};
  color: ${props=>props.color};
  width: 90%;
  max-width: 375px;
  height: 45px;
  margin-top: 20px;
  opacity: .9;
  font-size: 20px;
  font-weight: bold;
  border: inset 1px ${props=>props.bgc};

`
export const Button2 = styled(NavLink)`
  background-color: ${props=>props.bgc};
  color: ${props=>props.color};
  width: 90%;
  max-width: 375px;
  height: 35px;
  margin-top: 20px;
  opacity: .9;
  font-size: 20px;
  font-weight: bold;
  border: inset 1px ${props=>props.bgc};
  font-style: none;
  text-decoration: none;
  text-align: center;
`

export const ErrorMsg = styled.div`
color: red;
`