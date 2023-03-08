import axios from 'axios';

import { useState } from "react";
import { useContext } from "react";
import { TAGS, Quizcontext } from "../context/quiz";


import './CadastrarPergunta.css';

const CadastrarPergunta = () => {

    const [question,setQuestion] = useState('');
    const [op1, setOp1] = useState('');
    const [op2, setOp2] = useState('');
    const [op3, setOp3] = useState('');
    const [op4, setOp4] = useState('');
    const [op5, setOp5] = useState('');
    const [answer,setAnswer] = useState('');
    const [tag,setTag] = useState('')
    const [options,setOptions] = useState([])
    


    
const teste = []


    function handleRegister(e){
        e.preventDefault()


       // teste.push(op1,op2,op3,op4,op5)
        setOptions([op1,op2,op3,op4,op5])


        
        console.log(question,op1,op2,op3,op4,op5,answer,tag)

        console.log('teste ',options)

        

        

        axios.post('http://localhost:8080/register',{
            question:question,
            options:[op1,op2,op3,op4,op5],
            answer:answer,
            tag:tag
        })





        setQuestion('')
        setOp1('')
        setOp2('')
        setOp3('')
        setOp4('')
        setOp5('')
        setAnswer('')
        setTag('')
        setOptions([])
        
    }

    console.log()
    
    const [quizState, dispatch] = useContext(Quizcontext);

    return(


        <div className="cadastrar-pergunta">
            <form onSubmit={handleRegister}>
                <div className="input inputquestion">
                <span>Question</span>
                

                <textarea className="question" value={question} onChange={(e) => setQuestion(e.target.value)} ></textarea>

                </div>

                <div className="input">
                <span>op1</span>
                <input type='text' name="op1" value={op1} onChange={(e) => setOp1(e.target.value)} />

                </div>

                <div className="input">
                <span>op2</span>
                <input type='text' name="op2" value={op2} onChange={(e) => setOp2(e.target.value)} />

                </div>

                <div className="input">
                <span>op3</span>
                <input type='text' name="op3" value={op3} onChange={(e) => setOp3(e.target.value)} />

                </div>
                
                <div className="input">
                <span>op4</span>
                <input type='text' name="op4" value={op4} onChange={(e) => setOp4(e.target.value)} />

                </div>

                <div className="input">
                <span>op5</span>
                <input type='text' name="op5" value={op5} onChange={(e) => setOp5(e.target.value)} />

                </div>
               
                <div className="input">
                <span>Resposta</span>
                <input type='text' name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />

                </div>

                <select className="select" name="tag"  onChange={(e) => setTag(e.target.value)}>
                    <option></option>
                   {TAGS.map(e =>  <option key={e} value={e}>{e}</option>)}
                   
                </select>

                <button>Cadastrar</button>
                

            </form>
            <button onClick={() => dispatch({type:"CHANGE_STATE_START"})}>Quiz</button>
        </div>
    )

}


export default CadastrarPergunta;