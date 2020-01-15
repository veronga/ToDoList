import React, { useState } from "react";
import List from "../List";
import Badge from "../Badge";

import plusSvg from "../../image/plas.png";
import closeSvg from "../../image/close.png";
import "./style.scss";

const AddButtonList = ({ colors, onAdd }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [seletedColor, selectColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState("");

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue("");
    selectColor(colors[0].id);
  };

  const addList = () => {
    if (!inputValue) {
      alert("Введите название списка");
      return;
    }
    const color = colors.filter(c => c.id === seletedColor)[0].name;
    onAdd({ id: Math.random(), name: inputValue, color });
    onClose();
  };

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
            onClick={onClose}
            src={closeSvg}
            alt="close button"
            className="close-btn"
          />
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Название списка"
          />
          {colors.map(color => (
            <Badge
              onClick={() => selectColor(color.id)}
              color={color.name}
              key={color.id}
              className={seletedColor === color.id && "active"}
            />
          ))}
          <button onClick={addList} className="button">
            Добавить
          </button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
