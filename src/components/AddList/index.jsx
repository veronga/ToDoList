import React, { useState } from "react";
import List from "../List";
import Badge from "../Badge";

import plusSvg from "../../image/plas.png";
import closeSvg from "../../image/close.png";
import "./style.scss";

const AddButtonList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [seletedColor, selectColor] = useState(colors[0].id);

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            icon: <img src={plusSvg} alt="plus icon" />,
            name: "Добавить список",
            className: "list__add-button"
          }
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="close button"
            className="close-btn"
          />
          <input className="field" type="text" placeholder="Название списка" />
          {colors.map(color => (
            <Badge
              onClick={() => selectColor(color.id)}
              color={color.name}
              key={color.id}
              className={seletedColor === color.id && "active"}
            />
          ))}
          <button className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
