import React from "react";
import styled from "styled-components";
import { theme } from "../../themes.js";

const ButtonWrapper = styled.button`
  padding: 0px 8px;
  border-radius: 5px;
  background-color: transparent;
  color: #C6F6FB;
  font-weight: bold;
  font-size: 3.5vh;
  letter-spacing: .1em;
  text-transform: uppercase;
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${theme.lightBlue};
    color: #000;
  }
`;

export function Button(props) {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
  