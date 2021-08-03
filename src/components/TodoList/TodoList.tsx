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

  // check the todo is done or not
  const renderButtons = (todo: any) => {
    if (todo.active_state === true) {
      return (
        <div>
          <Button
            variant="contained"
            color="secondary"
            value={todo._id}
            onClick={() => onHandleClick(todo._id, action)}
          >
            Delete
          </Button>
        </div>
      );
    } else if (todo.active_state === false) {
      return (
        <div>
          <Button
            variant="contained"
            color="primary"
            value={todo._id}
            onClick={() => onHandleClick(todo._id, (action = "update"))}
          >
            Done
          </Button>
          <Button
            variant="contained"
            color="secondary"
            value={todo._id}
            onClick={() => onHandleClick(todo._id, action)}
          >
            Delete
          </Button>
        </div>
      );
    }
  };

  return (
    <>
      <Card className="todos">
        {todos?.todos?.map((todo: any, index: number) => {
          return (
            <div key={index}>
              <CardContent className="todo">
                <Typography className="labels">{todo.title}</Typography>
                <Typography className="labels">{new Date(todo.end_date).toLocaleDateString()}</Typography>
                <ButtonGroup className="btnGroup">
                  {renderButtons(todo)}
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
