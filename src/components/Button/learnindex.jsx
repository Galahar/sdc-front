import styled from "styled-components";
import { theme } from "../../themes";

const LearnButton = styled.button`
    margin-top: -10px;
    padding: 10px 25px;
    border-radius: 5px;
    background-color: transparent;
    font-weight: bold;
    font-size: 30px;
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: .1em;
    text-transform: uppercase;
    outline: none;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 220ms ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${theme.bright};
    }
    margin-left: 300px;
    color: ${theme.text};
`;

export default LearnButton;