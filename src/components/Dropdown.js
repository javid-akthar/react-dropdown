import React, { useState } from "react";
import styled from "styled-components";
// importing the css
import classes from "./Dropdown.module.css";
// importing the bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Dropdown(props) {
  // this is boolean indictor which maintains showing the options list on mouse
  //  hover by user
  let [showList, setShowList] = useState(false);
  //  if user selects a valid value this useState will maintain the valid value
  let [selectedValue, setSelectedValue] = useState("select");
  // this is boolean indictor which maintains showing the selected data from
  // dropdown after user selects a valid data
  let [showSelectedValue, setShowSelectedValue] = useState(false);

  // this is for implmenting the style
  let StyledListContainer = styled.li`
    &:hover {
      background-color: rgb(201, 229, 238);
    }
  `;

  //   function showing the options list on mouse
  //  hover by user
  function show(event) {
    setShowList(true);
  }

  //   if a user selects any value in option the option visibily need to be hidded
  //   this function maintains that
  function hide(val) {
    if (val === "select") {
      setShowList(false);
      setSelectedValue(val);
      setShowSelectedValue(false);
      return;
    }
    console.log(val);
    setSelectedValue(val);
    setShowSelectedValue(true);
    setShowList(false);
  }

  let selectStyle = { width: "25%", margin: "auto", cursor: "pointer" };

  //   list of option values that user can select
  let optionList = props.optionList;

  //   creating the list of option with the input list
  let element = optionList.map(function (item, index) {
    return (
      <StyledListContainer
        value={item}
        key={index}
        onClick={() => {
          hide(item);
        }}
        className="list-group-item"
        style={selectStyle}
      >
        {item}
      </StyledListContainer>
    );
  });

  return (
    <>
      {showSelectedValue ? (
        <h4 className={classes.selectElementData}>
          the selected value is "{selectedValue}"
        </h4>
      ) : null}
      <div className={classes.selectContainer}>
        <h4 className={classes.selectHeading}>select a value form dropdown</h4>
        <button className={classes.selectButton} onMouseOver={show}>
          {selectedValue}
        </button>
        {showList ? <ul className="list-group">{element}</ul> : null}
      </div>
    </>
  );
}

export default Dropdown;
