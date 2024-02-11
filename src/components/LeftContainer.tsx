import React, { PropsWithChildren, FC, Children, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MainBackground } from "../utility";
import LeftButton from "./LeftButton";

export default function Container() {
  const [pushedButton, setPushedButton] = useState<boolean>(true);

  const useStyles = makeStyles({
    container: {
      background: MainBackground,
      width: !pushedButton ? "30%" : 0,
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <LeftButton
        pushedButton={pushedButton}
        setPushedButton={setPushedButton}
      />
    </div>
  );
}
