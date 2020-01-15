import React, { useState, useEffect } from "react";
import axios from "axios";

import { List, AddList, Tasks } from "./components";

import listSvg from "./image/list.png";

function App() {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/lists?_expand=color&_embed=tasks")
      .then(({ data }) => {
        setLists(data);
      });
    axios.get("http://localhost:3001/colors").then(({ data }) => {
      setColors(data);
    });
  }, []);

  const onAddList = obj => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  return (
    <div className="todo">
      <div className="todo__siderbar">
        <List
          items={[
            {
              icon: <img src={listSvg} alt="list icon" />,
              name: "Все задачи"
            }
          ]}
        />
        {lists ? (
          <List
            items={lists}
            onRemove={id => {
              const newLists = lists.filter(item => item.id !== id);
              setLists(newLists);
            }}
            isRemovable
          />
        ) : (
          "Загрузка..."
        )}
        <AddList onAdd={onAddList} colors={colors} />
      </div>
      <div className="todo__tasks">{lists && <Tasks list={lists[1]} />}</div>
    </div>
  );
}

export default App;
