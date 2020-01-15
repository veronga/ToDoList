import React from "react";
import classNames from "classnames";

import Badge from "../Badge";

import "./style.scss";

import removeSvg from "../../image/remove.png";

const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = item => {
    if (window.confirm("Вы действительно хотите удалить список?")) {
      onRemove(item);
    }
  };

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              src={removeSvg}
              alt="remove icon"
              className="list__remove-icon"
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
