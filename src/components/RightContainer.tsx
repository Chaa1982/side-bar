import React, { PropsWithChildren, FC, Children, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MainBackground } from "../utility";
import RightButton from "./RightButton";

export default function Container() {
  const [pushedButton, setPushedButton] = useState<boolean>(true);

  const useStyles = makeStyles({
    outWrap: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "flex-end",
    },
    
    container: {
      background: MainBackground,
      width: !pushedButton ? "30%" : 0,
      height: "100vh",
      display: "flex",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.outWrap}>
      <div className={classes.container}>
        <RightButton
          pushedButton={pushedButton}
          setPushedButton={setPushedButton}
        />
      </div>
    </div>
  );
}
