import { useContext } from "react";
import { Quizcontext } from "../context/quiz";

import './GameOver.css'

import WellDone from "../img/welldone.svg";

const GameOver = () => {

    const [quizState, dispatch] = useContext(Quizcontext);

    return(

        <div id='gameover'>
            <h2>Game Over</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({ type: "CHANGE_STATE_START" })}>Reiniciar</button>
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Add questões</button>
        </div>

    )

}

export default GameOver;