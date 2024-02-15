import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import { ChoiceButton, PrimaryButton, RulesButton } from "../theme/Buttons"

import { data } from "../assets/data"

import styled from "styled-components"




const Battle = ({ setOpenModal, score, setScore, userChoice, setUserChoice}) => {
    
    const [computerChoice, setComputerChoice] = useState(data[Math.floor(Math.random() * data.length)])
    const [title, setTitle] = useState(null)
    const [battleResult, setBattleResult] = useState(null)
    const t1 = useRef()
    const RestartGame = () => {
        setUserChoice(null)
        setComputerChoice(null)
        setBattleResult(null)
    }

    useLayoutEffect(() => {  
        gsap.registerPlugin(CSSRulePlugin);
        
        t1.current = gsap.timeline({
            repeat: false,
            defaults: { autoAlpha: 1, duration: 1, }
        })

        t1.current.fromTo('.g-bounce-in', {
                autoAlpha: 0, scale: 0,
        }, {
                scale: 1, stagger: 0.5, ease: "bounce.out",
        })
        t1.current.fromTo('.g-slide-down', {
            y: -100,
            autoAlpha: 0
        }, {
            y: 0,
        })
        t1.current.fromTo(CSSRulePlugin.getRule(".circle::after"), {
            scale:0,
            autoAlpha: 0,
        }, {
            scale: 1.75,
            duration: 2.5,
            ease: "slow(0.7,0.7,false)",
        })
    }, [])

    useEffect(() => {
        if(userChoice == computerChoice) {
            setTitle("remis")
            setBattleResult(3)
        } else if(userChoice.beats.includes(computerChoice.name)) {
            setTitle("you win")
            setBattleResult(1)
            setScore(score +1)
        } else {
            setTitle("you lose")
            setBattleResult(0)
            if(score == 0 ) return;
            setScore(score -1)
        } 
    }, [])
return(
    <>  
        <Container>
            <Col>
                <PickedTitle>you picked</PickedTitle>      
                <ChoiceButton className={userChoice.name + ' big g-bounce-in ' + (battleResult == 1 ? 'circle' : "null") }>
                    <img src={userChoice.image}/>
                </ChoiceButton>   
            </Col>
            <Col className="g-slide-down">
                <ResultTitle>{ title }</ResultTitle>
                <PrimaryButton onClick={()=> RestartGame()}>play again</PrimaryButton>
            
            </Col>
            <Col>
                <PickedTitle>the house picked</PickedTitle>          
                <ChoiceButton className={computerChoice.name + ' big g-bounce-in ' +  (!battleResult ? 'circle' : "null") }>
                    <img src={computerChoice.image}/>
                </ChoiceButton>
            </Col>
        </Container>
       
    </>
)}

export default Battle

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5rem;

    @media(max-width: 45rem) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: dense;
        place-items: center;
        justify-content: space-around;
    }
`
const Col = styled.div`
    display: flex;
    gap:40px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
   
   &:nth-child(2) {
        @media(max-width: 45rem) {
            grid-column: 1 / -1;
        } 
   }
`
const PickedTitle = styled.h2`
    font-size: 1.75rem;
    color: hsl(0,0%,100%);
    text-transform: uppercase;
    text-align: center;
`
const ResultTitle = styled(PickedTitle)`
    font-size: 3rem;
`