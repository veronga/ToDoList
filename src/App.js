import React, { useState } from "react";

import List from "./components/List";
import AddList from "./components/AddList";

import listSvg from "./image/list.png";
import DB from "./image/DB.json";

function App() {
  const [lists, setLists] = useState(
    DB.lists.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
      return item;
    })
  );

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
        <List items={lists} isRemovable />
        <AddList onAdd={onAddList} colors={DB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
