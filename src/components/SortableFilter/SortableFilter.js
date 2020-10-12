import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import arrayMove from "array-move";
import SortableList from "./SortableList/SortableList";
import { Button, Container } from "react-bootstrap";

import "./SortableFilter.css";

function SortableFilter() {
  const [companies, setCompanies] = React.useState([
    "Stream Flare",
    "KloundBound",
    "Sound Patrol",
  ]);
  const [roles, setRoles] = React.useState([
    "Data Science",
    "Data Engineering",
    "Developer",
  ]);
  const [checkedCompanies, setCheckedCompanies] = React.useState([]);
  const [checkedRoles, setCheckedRoles] = React.useState([]);

  const handleToggleCompanies = (value) => () => {
    const currentIndex = checkedCompanies.indexOf(value);
    const newChecked = [...checkedCompanies];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedCompanies(newChecked);
  };
  const handleToggleRoles = (value) => () => {
    const currentIndex = checkedRoles.indexOf(value);
    const newChecked = [...checkedRoles];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedRoles(newChecked);
  };
  const applyFilters = () => {
    const filteredCompanyValues = companies
      .map((val) => {
        let result = checkedCompanies.find((chkdVal) => val === chkdVal);
        return result;
      })
      .filter((val) => val !== undefined);
    const filteredRoleValues = roles
      .map((val) => {
        let result = checkedRoles.find((chkdVal) => val === chkdVal);
        return result;
      })
      .filter((val) => val !== undefined);
    console.log(`Filtered companies: ${filteredCompanyValues}`);
    console.log(`Filtered roles: ${filteredRoleValues}`);
  };
  const onSortEndA = ({ oldIndex, newIndex }) => {
    setCompanies(arrayMove(companies, oldIndex, newIndex));
  };
  const onSortEndB = ({ oldIndex, newIndex }) => {
    setRoles(arrayMove(roles, oldIndex, newIndex));
  };
  const handleSelectAll = (e) => {
    if (
      (e.target.name === "allCompanies" ||
        e.target.name === "allCompaniesInd") &&
      !(companies.length === checkedCompanies.length)
    ) {
      setCheckedCompanies([...companies]);
    } else if (
      e.target.name === "allCompanies" ||
      e.target.name === "allCompaniesInd"
    ) {
      setCheckedCompanies([]);
    }
    if (
      (e.target.name === "allRoles" || e.target.name === "allRolesInd") &&
      !(roles.length === checkedRoles.length)
    ) {
      setCheckedRoles([...roles]);
    } else if (
      e.target.name === "allRoles" ||
      e.target.name === "allRolesInd"
    ) {
      setCheckedRoles([]);
    }
  };
  const cancel = () => {
    setCheckedCompanies([]);
    setCheckedRoles([]);
  };
  return (
    <Container>
      <div className="list">
        <ul>
          <ListItem role={undefined} dense button>
            <ListItemIcon>
              {companies.length === checkedCompanies.length ? (
                <Checkbox
                  edge="start"
                  checked={companies.length === checkedCompanies.length}
                  inputProps={{ "aria-label": "checkbox with default color" }}
                  name="allCompanies"
                  onClick={(event) => {
                    handleSelectAll(event);
                  }}
                />
              ) : (
                <Checkbox
                  indeterminate
                  edge="start"
                  checked={companies.length !== checkedCompanies.length}
                  name="allCompaniesInd"
                  onClick={(event) => {
                    handleSelectAll(event);
                  }}
                />
              )}
            </ListItemIcon>
            <ListItemText primary={`Companies`} />
          </ListItem>
          <Divider />
          <SortableList
            items={companies}
            handleToggle={handleToggleCompanies}
            checked={checkedCompanies}
            onSortEnd={onSortEndA}
          />
        </ul>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Divider orientation="vertical" flexItem />
        <ul>
          <ListItem role={undefined} dense button>
            <ListItemIcon>
              {roles.length === checkedRoles.length ? (
                <Checkbox
                  edge="start"
                  name="allRoles"
                  checked={roles.length === checkedRoles.length}
                  onClick={(event) => {
                    handleSelectAll(event);
                  }}
                />
              ) : (
                <Checkbox
                  indeterminate
                  edge="start"
                  name="allRolesInd"
                  checked={roles.length !== checkedRoles.length}
                  onClick={(event) => {
                    handleSelectAll(event);
                  }}
                />
              )}
            </ListItemIcon>
            <ListItemText primary={`Roles`} />
          </ListItem>
          <Divider />
          <SortableList
            items={roles}
            handleToggle={handleToggleRoles}
            checked={checkedRoles}
            onSortEnd={onSortEndB}
          />
        </ul>
      </div>
      <div className="buttons">
        <Button onClick={applyFilters}>Apply filters</Button>
        &nbsp;
        <Button onClick={cancel}>Cancel</Button>
      </div>
    </Container>
  );
}
export default SortableFilter;
