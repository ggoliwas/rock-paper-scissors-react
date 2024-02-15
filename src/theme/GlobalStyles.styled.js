import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    width: 1366px;
    margin: 0 auto;
    padding-block: 3rem;
    padding-inline: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;

    @media (max-width: 1366px) {
        width: 100%;
        padding-inline: 1rem;
    }
`

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    body, html {
        height: 100%;
        color: hsl(229, 64%, 46%);
        font-family: 'Barlow Semi Condensed', sans-serif;
        font-weight: 500;
        background: radial-gradient(circle at 50% -20%, #1f3756, #192448, #141539);
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    button {
        outline: 0;
        border: 0;
        cursor: pointer;
        background-color: transparent;
    }
    &.circle {
        &::after {
            background-color: hsl(0deg 0% 100% / 10%);
            border-radius: 50%;
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            transition: opacity .5s linear,-webkit-transform .75s ease-in-out;
            box-shadow: 0px 0px 0px 10px rgb(255 255 255 / 3%), 0px 0px 0px 20px rgb(255 255 255 / 4%);
            width: 100%;   
            z-index : -1;
        }
    }
`