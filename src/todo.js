import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, TextField } from "@material-ui/core";
import { addToDo, changeValue } from "./actions";

export default function Todo() {
  const todos = useSelector((state) => state.todoReducer);
  const value = useSelector((state) => state.valueReducer);
  const dispatch = useDispatch();

  const listo = (task, index) => {
    return (
      <div className="task" key={index}>
        <div className="label">{task}</div>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            console.log(e.target);
          }}
          disableElevation
        >
          -
        </Button>
      </div>
    );
  };

  return (
    <div className="todo">
      <div className="title">
        <div>TODO LIST</div>
        <div className="add">
          <TextField
            id="standard-basic"
            label="To Do"
            className="input"
            onChange={(e) => {
              dispatch(changeValue(e.target.value));
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(addToDo(value));
            }}
            disableElevation
          >
            +
          </Button>
        </div>
      </div>

      {todos.map((value, index) => {
        return listo(value, index);
      })}
    </div>
  );
}
