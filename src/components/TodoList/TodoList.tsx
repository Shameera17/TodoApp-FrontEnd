import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  ButtonGroup,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  GetTodos,
  DeleteTodo,
  UpdateTodoState,
} from "../../redux/actionCreators";

function TodoList() {
  const [Reload, setReload] = useState(0);
  const [Todos, setTodos] = useState([]);

  const todos = useSelector((state: any) => state.todos);

  let action = "delete";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTodos());
  }, [Reload]);

  useEffect(() => {
    setTodos(todos);
  }, [Reload]);

  async function onHandleClick(id: string, action: string) {
    if (action === "update") {
      try {
        const res = await dispatch(UpdateTodoState(id));
        console.log("todo updated", res);
      } catch (error) {
        console.log(error);
      } finally {
        setReload((Reload) => Reload + 1);
      }
    } else if (action === "delete") {
      try {
        const res = await dispatch(DeleteTodo(id));
        console.log("todo deleted", res);
      } catch (e) {
        console.log(e);
      } finally {
        setReload((Reload) => Reload + 1);
      }
    }
  }

  // check the todo is done or not
  const renderButtons = (todo: any) => {
    if (todo.active_state === true) {
      return (
        <div>
          <Button
            variant="contained"
            color="error"
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
            className="btn"
            variant="contained"
            color="info"
            value={todo._id}
            onClick={() => onHandleClick(todo._id, (action = "update"))}
          >
            Done
          </Button>
          <Button
            className="btn"
            variant="contained"
            color="error"
            value={todo._id}
            onClick={() => {
              onHandleClick(todo._id, action);
            }}
          >
            Delete
          </Button>
        </div>
      );
    }
  };

  const renderStatus = (todo: any) => {
    if (todo.active_state === true) {
      return <Typography className="labels done">{todo.title}</Typography>;
    } else {
      return <Typography className="labels ">{todo.title}</Typography>;
    }
  };

  return (
    <>
      <Card className="todos">
        <Button
          className="btn"
          variant="outlined"
          onClick={() => {
            setReload((value) => value + 1);
          }}
        >
          Reload
        </Button>
        {todos?.todos?.map((todo: any, index: number) => {
          return (
            <div key={index}>
              <CardContent className="todo">
                {renderStatus(todo)}
                <Typography className="labels">
                  {new Date(todo.end_date).toLocaleDateString()}
                </Typography>
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
