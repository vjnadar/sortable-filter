import React from "react";
import { SortableElement } from "react-sortable-hoc";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DragHandleIcon from "@material-ui/icons/DragHandle";

const SortableItem = SortableElement(({ value, handleToggle, checked }) => {
  const labelId = `checkbox-list-label-${value}`;
  return (
    <ListItem
      key={value}
      role={undefined}
      dense
      button
      onClick={handleToggle(value)}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked.indexOf(value) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={`${value}`} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <DragHandleIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});
export default SortableItem;
