import React from "react";

import List from "./components/List/index";

import listSvg from "./image/list.png";

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
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
