import { useState } from "react"

import Header from "./components/Header"
import BoardGame  from "./components/BoardGame"
import Battle from "./components/Battle"
import Modal from "./components/Modal"

import { RulesButton } from "./theme/Buttons"

const App = () => {

    const [score, setScore] = useState(0)
    const [userChoice, setUserChoice] = useState(null)
    const [openModal, setOpenModal] = useState(0)

    return(
        <>
        { openModal? <Modal setOpenModal={setOpenModal}/> : null }
        
        <Header score={score}/>
        { userChoice? (
            <Battle score={score} setScore={setScore} userChoice={userChoice} setUserChoice={setUserChoice}/>
        ) : (
            <BoardGame setUserChoice={setUserChoice}/>   
        )}
            <RulesButton onClick={()=> setOpenModal(1)}>rules</RulesButton>
        </>
    )
}

export default App