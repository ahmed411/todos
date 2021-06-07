import React, { useState } from "react";
import Dummy from "./Dummy";
import Tasks from "./Tasks";
import "./home.css";

function Home() {
  const [tasksList, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [selectedTask, setTaskSelection] = useState(null);
  const handleText = (evnt) => setTaskName(evnt.target.value);
  const handleAddBtn = () => {
    if (toggleSubmit) {
      let data = {
        name: taskName,
        // id: tasksList.length + 1,
        id: Math.floor(Math.random() * 100),
        completed: false,
      };
      taskName
        ? setTasks((prev) => {
            return [...prev, data];
          })
        : alert("Task can't be empty");
      // const old = [...tasksList];
      // old.push(data);
      // taskName ? setTasks(old) : alert("Task can't be empty");
      setTaskName("");
    } else {
      taskName
        ? setTasks(
            tasksList.map((tasks) => {
              if (tasks.id === selectedTask) {
                return { ...tasks, name: taskName };
              }
              return tasks;
            })
          )
        : alert("Task can't be empty");
      setTaskName("");
      setToggleSubmit(!toggleSubmit);
    }
  };
  const handleCancelBtn = () => setTaskName("");
  const handleComplete = ({ id }) => {
    setTasks(
      tasksList.map((items) => {
        if (items.id === id) {
          return { ...items, completed: !items.completed };
        }
        return items;
      })
    );
  };
  const handleEdit = (id) => {
    const foundTask = tasksList.find((task) => task.id === id);
    setToggleSubmit(!toggleSubmit);
    setTaskName(foundTask.name);
    setTaskSelection(id);
  };
  const handleDelete = ({ id }) =>
    setTasks(tasksList.filter((items) => items.id !== id));
  return (
    <>
      <div className="box">
        <div className="task-box">
          <input
            type="text"
            name="task"
            placeholder="What's your plan today?"
            className="add-task"
            value={taskName}
            onChange={handleText}
          />
          <div className="add-btn">
            {toggleSubmit ? (
              <i
                className="fa fa-plus-square"
                aria-hidden="true"
                onClick={handleAddBtn}
                title="Add Task"
              />
            ) : (
              <i
                className="fa fa-pencil-square-o"
                aria-hidden="true"
                title="Edit Task"
                onClick={handleAddBtn}
              />
            )}
          </div>
          <div className="cancel-btn">
            <i
              className="fa fa-times"
              aria-hidden="true"
              title="Cancel Task"
              onClick={handleCancelBtn}
            ></i>
          </div>
        </div>
      </div>
      {tasksList && tasksList.length > 0 ? (
        <Tasks
          tasksList={tasksList}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <Dummy />
      )}
    </>
  );
}

export default Home;
