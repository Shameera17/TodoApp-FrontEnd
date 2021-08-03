import React, { useEffect, useState } from "react";
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
import {
  GetTodos,
  DeleteTodo,
  UpdateTodoState,
} from "../../redux/actionCreators";
function TodoList() {
  const [Reload, setReload] = useState(0);
  const todos = useSelector((state: any) => state.todos);
  let action = "delete";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTodos());
  }, [Reload]);

  function onHandleClick(id: string, action: string) {
    if (action === "update") {
      dispatch(UpdateTodoState(id));
      setReload(Reload + 1);
    } else if (action === "delete") {
      dispatch(DeleteTodo(id));
      setReload(Reload + 1);
    }
  }
  return (
    <>
      <Card>
        {todos?.todos?.map((todo: any, index: number) => {
          return (
            <div key={index}>
              <CardContent>
                <Typography>{todo.title}</Typography>
                <Typography>{todo.end_date}</Typography>
              </CardContent>
              <CardContent>
                <ButtonGroup variant="contained">
                  <Button
                    color="primary"
                    value={todo._id}
                    onClick={() => onHandleClick(todo._id, (action = "update"))}
                  >
                    Done
                  </Button>
                  <Button
                    color="secondary"
                    value={todo._id}
                    onClick={() => onHandleClick(todo._id, action)}
                  >
                    Delete
                  </Button>
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
