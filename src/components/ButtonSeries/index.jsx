import styled from "styled-components";
import { theme } from "../../themes";

const Button = styled.button`
    margin-top: 30px;
    margin-bottom: 50px;
    border-radius: 5px;
    background-color: ${theme.highlight};
    font-weight: bold;
    font-size: 15px;
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: .1em;
    text-transform: uppercase;
    outline: none;
    border: 2px solid transparent;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: ${theme.bright};
    }
    text-wrap: nowrap;
`;

export default Button;