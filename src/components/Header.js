
import styled from "styled-components";

import logo from "../assets/logo-bonus.svg"
import Counter from "./Counter";

const Header = ({score}) => {
    return (
        <HeaderStyled>
            <img src={ logo } alt="rock-paper-scissors-lizard-spock logo"/>
            <Counter score={score}></Counter>
        </HeaderStyled>
         
       
    )
}

export default Header

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 1.25rem 2rem;
    border: 4px solid hsl(217, 16%, 45%);
    border-radius: 12px;

    @media (max-width: 45rem) {
        width: 100%;
    }
`