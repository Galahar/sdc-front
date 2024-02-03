import styled from "styled-components";
import { theme } from "../../themes";

const Button = styled.button`
    margin-top: 30px;
    margin-bottom: 50px;
    border-radius: 5px;
    background-color: ${theme.highlight};
    font-weight: bold;
    font-size: 19px;
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: .1em;
    text-transform: uppercase;
    outline: none;
    border: 2px solid transparent;
    cursor: pointer;
    &:hover {
        background-color: ${theme.highlightbright};
    }
    color: ${theme.text};
`;

export default Button;
  