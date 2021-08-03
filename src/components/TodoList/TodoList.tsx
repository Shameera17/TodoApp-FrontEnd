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
import { TodoData } from "../../dummyData/TodoData";

function TodoList() {
  const todos = useSelector((state: Store) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTodos());
  }, []);

  console.log("todos",todos)

  function renderTodos() {
    todos && todos.map((todo, index) => {
      if (todo.active_state === false) {
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
      }
    });
  };

  return (
    <>
      <Card>
          {renderTodos}
      </Card>
    </>
  );
}

export default TodoList;
