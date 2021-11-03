import React, { useState } from 'react';
import './AddTask.css'
import Button from './Button';
import './Button.css';

const AddTask = ({handleTaskadd}) => {

    const [inputData,setInputData] = useState('');

    const handleInputData = (e)=>{
        setInputData(e.target.value)
    }

   const handleClickAdd = ()=>{
      handleTaskadd(inputData)
      setInputData('');
    
   }

    return ( 
        <div className="add-task-container">
            <input onChange={handleInputData} value={inputData} type="text" className="add-task-input" placeholder="Escreva a tarefa"></input>
            <div  className="add-task-button-container">
            <Button funcaoOnclick={handleClickAdd}>Adicionar tarefa</Button>

            </div>

        </div>
     );
}
 
export default AddTask;