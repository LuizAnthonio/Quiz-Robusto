

import axios from "axios";
import { useContext, useState } from "react";
import { Quizcontext } from "../context/quiz";
import { TAGS } from "../context/quiz";

import Quiz from "../img/quiz.svg"


import './Welcome.css';


const Welcome = () => {

    const [selected,setSelected] = useState('vazio')

    ///quizState pega os valores e o dispatch muda eles

    const [quizState, dispatch] = useContext(Quizcontext);

    function heandleSelectCategory(e){
        e.preventDefault()

       // alert(selected)
        console.log(selected)

        axios.post('http://localhost:8080/', {selected: selected})

        dispatch({type:"CHANGE_STATE", payload: selected})

    }


    //console.log(quizState)

    return(
        <div id="welcome"> 
            <h2>Seja bem-vindo</h2>
            <p>clique no botão abaixo para começar:</p>
            
            <h3>Selecione a categoria</h3>

           <div className="container-selected">

            <form onSubmit={heandleSelectCategory}>

                {TAGS.map(a => 
            
            <label className="single-selected">
            <input type="radio" name="opcao" value={a} onChange={e => setSelected(e.target.value)} />

           
   
            <span >{a}</span>
          

            </label>


            )}

           

            <button >Iniciar</button>

            </form>

            

          

           </div>
            

      
            <img src={Quiz} alt=''/>
        </div>
    )
}

export default Welcome;
