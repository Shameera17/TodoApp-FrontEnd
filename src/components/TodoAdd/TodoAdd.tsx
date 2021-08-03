import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import DateAdapter from '@material-ui/lab/AdapterDateFns';
import Dialog from '@material-ui/core/Dialog';
import { AddTodo } from "../../redux/actionCreators";
function TodoAdd() {
  const [Title, setTitle] = useState("");
  const [EndDate, setEndDate] = useState("");

  const onHandleClick = (event: { preventDefault: () => void }) => {
    console.log("title", Title);
    console.log("date", EndDate);
    event.preventDefault();
    try {
      AddTodo(Title, EndDate);
    } catch (error) {
      console.log("attemp failed");
    } finally {
      setEndDate("");
      setTitle("");
    }
  };
  return (
    <Grid>
      <TextField
        label="New Todo"
        name="title"
        value={Title}
        
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="End Date"
          value={EndDate}
          onChange={(newValue : string) => {
            setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button onClick={onHandleClick}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
