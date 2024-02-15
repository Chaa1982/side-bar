import React, { PropsWithChildren, FC, Children, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MainBackground } from "../utility";
import MyButton from "./MyButton";

interface PropsInterface {
  side: 'left' | 'right';
}

export default function Container(props: PropsInterface) {
  const [pushedButton, setPushedButton] = useState<boolean>(true);

  const useStyles = makeStyles({
    container: {
      background: MainBackground,
      width: !pushedButton ? "30%" : 0,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      marginLeft: (props: PropsInterface) => props.side === 'left' ? '0' : 'auto',
    },
  });
  const classes = useStyles(props);
  

  return (
    <div className={classes.container}>
      <MyButton
        pushedButton={pushedButton}
        setPushedButton={setPushedButton}
        side={props.side}

      />
    </div>
  );
}
