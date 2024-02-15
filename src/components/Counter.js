import styled from "styled-components";

const Counter = (props) => {
    return(
        <CounterStyled>
            <h2>score</h2>
            <span>{props.score}</span>
        </CounterStyled>
    )
}

export default Counter

const CounterStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    width: 150px;
   
    h2 {
        font-size: 1rem;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    span {
        font-size: 3rem;
        color: hsl(229, 25%, 31%);
    }
`