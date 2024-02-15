import styled from "styled-components";


export const PrimaryButton = styled.button`
    background-color: hsl(0, 0%, 100%);
    border: 1px solid hsl(0, 0%, 100%);
    color: hsl(237, 49%, 15%);
    letter-spacing: 2px;
    border-radius: 6px;
    padding-inline: 20px;
    padding-block: 6px;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    transition: 0.3s;
    zoom: 1.5;

    &:hover {
        color: hsl(0, 0%, 100%);
        background-color: transparent;
    }
  
`
export const RulesButton = styled(PrimaryButton)`
    background-color: transparent;
    border: 1px solid hsl(0, 0%, 100%);
    color: hsl(0, 0%, 100%);
    

    @media(min-width: 45rem) {
        position: fixed;
        bottom: 5%;
        right: 5%;
        zoom:1;
    }

    &:hover {
        color: hsl(229, 25%, 31%);
        background-color: hsl(0, 0%, 100%)
    }

`
export const ChoiceButton = styled.button`
    display: flex;
    text-align: center;
    align-items: center;
    position: relative;
    justify-content: center;
    background-color: hsl(0, 0%, 100%);
    border-radius: 50%;
    width: 8rem; 
    aspect-ratio: 1;  
    ${(props) => props.position}; 
    
    &.big {
       zoom: 3;

       @media(max-width: 75rem) {
            zoom:2;
       } 
       @media(max-width: 45rem) {
            zoom:1.2;
       } 
    }

    &.rock {
        border: 17px solid  hsl(349, 70%, 56%);
        box-shadow: inset 0px 5px 0px 0px #cbc8c8, 0px 6px 0px 0px hsl(349, 71%, 52%);
    }

    &.paper {
        border: 17px solid hsl(230, 89%, 65%);
        box-shadow: inset 0px 5px 0px 0px #cbc8c8, 0px 6px 0px 0px hsl(230, 89%, 62%);
    }

    &.scissors {
        border: 17px solid hsl(40, 84%, 53%);
        box-shadow: inset 0px 5px 0px 0px #cbc8c8, 0px 6px 0px 0px hsl(39, 89%, 49%);
    }

    &.lizard {
        border: 17px solid  hsl(261, 72%, 63%);
        box-shadow: inset 0px 5px 0px 0px #cbc8c8, 0px 6px 0px 0px hsl(261, 73%, 60%);
    }

    &.spock {
        border: 17px solid hsl(189, 58%, 57%);
        box-shadow: inset 0px 5px 0px 0px #cbc8c8, 0px 6px 0px 0px hsl(189, 59%, 53%);
    }
`