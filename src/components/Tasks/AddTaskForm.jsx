import React, { useState } from "react";
import axios from "axios";

import addSvg from "../../image/add.svg";

const AddTaskForm = ({ list, onAddTask }) => {
  const [visibleForm, setFormVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState("");

  const toggleFormVisible = () => {
    setFormVisible(!visibleForm);
    setInputValue("");
    setError("");
  };

  const addTask = () => {
    if (inputValue === "") {
      setError("Пожалуйста введите текст задачи");
    } else {
      const obj = {
        listId: list.id,
        text: inputValue,
        completed: false
      };
      setIsLoading(true);
      axios
        .post("http://localhost:3001/tasks", obj)
        .then(({ data }) => {
          onAddTask(list.id, data);
          toggleFormVisible();
        })
        .catch(e => {
          alert("Ошибка при добавлении задачи!");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="tasks__form">
      {!visibleForm ? (
        <div onClick={toggleFormVisible} className="tasks__form-new">
          <img src={addSvg} alt="Add icon" />
          <span>Новая задача</span>
        </div>
      ) : (
        <div className="tasks__form-block">
          <input
            value={inputValue}
            className="field"
            type="text"
            placeholder="Текст задачи"
            onChange={e => setInputValue(e.target.value)}
          />
          <button disabled={isLoading} onClick={addTask} className="button">
            {isLoading ? "Добавление..." : "Добавить задачу"}
          </button>
          <button onClick={toggleFormVisible} className="button button--grey">
            Отмена
          </button>
          <span className="tasks__text-error">{error}</span>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;
