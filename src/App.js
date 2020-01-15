import React from "react";

import List from "./components/List";
import AddList from "./components/AddList";

import listSvg from "./image/list.png";
import DB from "./image/DB.json";

function App() {
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
        <List
          items={[
            {
              color: "green",
              name: "Покупки"
            },
            {
              color: "blue",
              name: "Фронтенд",
              active: true
            },
            {
              color: "pink",
              name: "Фильмы и сериалы"
            }
          ]}
          isRemovable
        />
        <AddList colors={DB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
