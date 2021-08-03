import React, { useEffect } from "react";
import {
  Button,
  TextField,
  Checkbox,
  Typography,
  Card,
  CardContent,
  ButtonGroup,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../redux/type";
import { GetTodos } from "../../redux/actionCreators";

function TodoList() {
  const todos = useSelector((state : any) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTodos());
  }, []);

  
  console.log("todos///",todos.todos)
   


  return (
    <>
      <Card>
          { todos?.todos?.map((todo : any, index : number) => {
      return (
        <div key={index}>
          <CardContent>
              <Typography>{todo.title}</Typography>
              <Typography>{todo.end_date}</Typography>
          </CardContent>
          <CardContent>
            <ButtonGroup variant="contained">
              <Button color="primary">Done</Button>
              <Button color="secondary">Delete</Button>
            </ButtonGroup>
          </CardContent>
        </div>
      );
    })}
      </Card>
    </>
  );
}

export default TodoList;
