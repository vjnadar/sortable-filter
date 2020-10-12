import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "../SortableItem/SortableItem";
const SortableList = SortableContainer(({ items, handleToggle, checked }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${value}`}
          index={index}
          value={value}
          checked={checked}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
});
export default SortableList;
