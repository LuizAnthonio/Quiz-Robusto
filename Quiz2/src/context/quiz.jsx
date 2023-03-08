import axios from 'axios';


import { createContext, useReducer } from "react";
import questions1 from '../data/questions';
import Selector from "../components/Selector";




const response = await axios.get('http://localhost:8080/').then(resp =>{
    console.log("resposta api: ",resp.data)
   //console.log(res.data + 'dad')

    return resp.data
    
    
    
  
  })


const questions = response;

//console.log(questions1.filter(tes => tes.tag === "banco do brasil"))


const STAGES = ["Cadastro","Start", "Playing", "End"]

export const TAGS = ["javascript","banco do brasil"]

//importando perguntas e respostas 
const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    ansWerSelected: false,
   

};

const quizReducer = (state, action) => {
 //   console.log(state, action)

    switch(action.type){
        

       

        case "CHANGE_STATE_START":
            return {
                ///com isso podemos salvar o estado anterior
                ...state,
                gameStage: STAGES[1],
            };

        case "CHANGE_STATE":
            const categoria = action.payload;

            if(categoria === 'vazio'){

                return {
                    ...state,
                    gameStage: STAGES[2],
                }

            }else{

            return {

                

                ///com isso podemos salvar o estado anterior
                ...state,
                gameStage: STAGES[2],
                questions: questions.filter(tes => tes.tag === categoria) 
            };

            }


        case "REORDER_QUESTIONS":
            
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
            
          //  console.log("Reordenou")

            return {
                ...state,
                questions: reorderedQuestions,
            
            };

      

        case "CHANGE_QUESTION":
            const nexQuestion = state.currentQuestion + 1;
            let endGame = false

            if(!questions[nexQuestion]){
                endGame = true;

            }

            return {
                ...state,
                currentQuestion: nexQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
            }

        case "NEW_GAME":
            return initialState;


        case "CHECK_ANSWER":
           // console.log(action)
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if(answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,

            };

        default:
            return state;
    }

};

export const Quizcontext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <Quizcontext.Provider value={value}>{children}</Quizcontext.Provider>
}