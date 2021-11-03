import React from 'react';
import { useHistory, useParams } from 'react-router';
import Button from './Button';
import './TaskDetails.css'



const TaskDetails = () => {


    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = ()=>{
        history.goBack();
    }

    return ( 

        <>

            <div className="back-button-container">
                <Button funcaoOnclick={handleBackButtonClick}>Voltar</Button>


            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, deleniti sit! Beatae veritatis dolorem eum repellendus soluta odio quod non hic quo, deleniti distinctio eveniet suscipit? In nihil labore sint!</p>
            </div>

        </>

     );
}
 
export default TaskDetails;