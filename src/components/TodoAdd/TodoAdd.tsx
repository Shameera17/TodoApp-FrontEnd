import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { AddTodo } from "../../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

function TodoAdd() {
  const [Title, setTitle] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [Count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Refresh");
  }, [Count]);

  const onHandleClick = (event: { preventDefault: () => void }) => {
    try {
      setCount(Count + 1);

      dispatch(AddTodo(Title, EndDate));
    } catch (error) {
      console.log("attemp failed");
    } finally {
      setEndDate("");
      setTitle("");
    }
  };
  return (
    <Grid className="addTodo">
      <TextField
        className="inputText"
        label="Todo Title"
        name="title"
        value={Title}
        variant="outlined"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        className="inputText2"
        label="YYYY-MM-DD"
        name="End Date"
        value={EndDate}
        variant="outlined"
        onChange={(e) => {
          setEndDate(e.target.value);
        }}
      />
      <Button
        className="btn"
        variant="contained"
        onClick={onHandleClick}
        color="secondary"
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;

TodoAdd.propTypes = {
  newValue: PropTypes.string,
};
