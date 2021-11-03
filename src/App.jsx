import React, { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://bookstore-jocimar.herokuapp.com/tasks"

      );
      setTasks(data)
      console.log(data);
    };
    fetchTasks();

    


  }, []);

  const handleTaskClick = (taskid) => {
    console.log("clicou");
    const newTasks = tasks.map((task) => {
      if (task.id === taskid) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  const handleTaskadd = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);

    const novaTask = {
      
      id: null,
      title: taskTitle,
      completed: false,
      descricao: "jhdjhfjhfsdjfhjfh"
      
      
    };

    axios.post(`https://bookstore-jocimar.herokuapp.com/tasks`,  novaTask )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      

  };

  const handleTaskRemove = (taskid) => {
    const newTasks = tasks.filter((task) => task.id !== taskid);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <AddTask handleTaskadd={handleTaskadd} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskRemove={handleTaskRemove}
                ></Tasks>
              </>
            );
          }}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
