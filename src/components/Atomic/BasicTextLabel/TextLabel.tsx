import React, { ReactNode } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
interface Props {

}

const useStyles = makeStyles((theme) => {
    
});
export const TextLabel = (props: Props) => {
  const root = useStyles();

  return <TextField className="todo" {...props} />;
};
