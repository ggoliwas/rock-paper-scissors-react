import styled from "styled-components";
import { gsap } from "gsap";
import BoardBackground from "../assets/bg-pentagon.svg"

import { ChoiceButton } from "../theme/Buttons";


import { data } from "../assets/data"
const BoardGame = ({setUserChoice, userChoice}) => {

    const onEnterAnim =( {currentTarget}) => {
        gsap.to(currentTarget, {duration: .5, ease: "elastic.inOut(1,0.5)",
          scale: 1.2})
    }
    const onLeaveAnim =( {currentTarget}) => {
        gsap.to(currentTarget, { duration: .5, ease: "elastic.inOut(1,0.5)", scale: 1 })
    }

    return(
        <StyledBoardGame>
            {
                data.map((item, index) => (
                    <ChoiceButton onMouseEnter={onEnterAnim} onMouseLeave={onLeaveAnim}key={index} className={item.name} position={item.position} onClick={()=> setUserChoice(item)} userChoice={userChoice}>
                        <img src={item.image} />
                    </ChoiceButton>
                ))
            }
        </StyledBoardGame>
    )
}

export default BoardGame

const StyledBoardGame = styled.div`
    background-image: url(${BoardBackground}); 
    background-repeat: no-repeat;
    justify-self: center;
    position: relative;
    width: 340px;
    aspect-ratio: 1;
`