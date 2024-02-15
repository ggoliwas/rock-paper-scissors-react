import styled from "styled-components"


import Rules from "../assets/image-rules-bonus.svg";
import IconClose from "../assets/icon-close.svg"

const Modal = ({setOpenModal}) => {
    return(
        <>
        <ModalOverlay onClick={()=> setOpenModal(0)}></ModalOverlay>
        <ModalBox>
            <ModalContent>
                <div>
                    <h2>rules</h2>
                    <button onClick={()=> setOpenModal(0)}><img src={IconClose} alt="close-button" /></button>
                </div>
                <img src={Rules} alt="rock-paper-scissors-lizard-spock rules"/>
            </ModalContent>
       </ModalBox>
    
       </>
    )
}

export default Modal;

const ModalOverlay = styled.div`
    position:fixed;
    top: 0;
    background-color: hsl(0 0% 0% / 50%);
    width: 100%;
    height: 100%;
    z-index: 100;
    cursor: pointer;
`

const ModalBox = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    position:fixed;
    z-index: 1000;    
`
const ModalContent = styled.div`
    padding:2rem;
    border-radius: 8px;
    background-color: #fff;
    flex-wrap: wrap;
    div {
        display: flex;
        justify-content: space-between;
    }
    h2 {
        color: hsl(229, 25%, 31%);
        text-transform: uppercase;
    }
`

