import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
import styled from "styled-components";

//* Create a FormControl(div) using "styled-components" :
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    text-align: center;
    margin-bottom: 0.8rem;
    color: ${(props) => (props.invalid ? "#c21e1e" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 2px solid ${(props) => (props.invalid ? "#c21e1e" : "#ccc")};
    border-radius: 3px;
    backgound: ${(props) => (props.invalid ? "#c21e1e" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0.45rem 0.45rem;
  }

  & input:focus {
    outline: none;
    background: #f3f1f2;
    border-color: #8b005d;
  }

  // &.invalid input {
  //   border-color: #d1b7c4;
  //   background-color: #847e82;
  // }

  // &.invalid label {
  //   color: red;
  // }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid ? "invalid" : ""}> */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
