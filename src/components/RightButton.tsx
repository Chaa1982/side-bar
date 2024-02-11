import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {MainBackground} from '../utility';

interface PropsInterface {
   pushedButton: boolean,
   setPushedButton: (a: boolean) => void,
}

const useStyles = makeStyles({
   rightButton: {
      minWidth: '20px',
      height: '100px',
      background: MainBackground,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000',
      marginTop: 'calc(50vh - 100px)',
      marginLeft: '-20px',
      position: 'relative',

      '&::before': {
         display: 'block',
         content: "''",
         width: '100%',
         height: '30px',
         position: 'absolute',
         top: '0',
         left: '0',
         transform: 'translateY(-97%)',
         background: `linear-gradient(to top left, ${MainBackground} 50%, rgba(0, 0, 0, 0) 52%)`,
      },
      
      '&::after': {
         display: 'block',
         content: "''",
         width: '100%',
         height: '30px',
         position: 'absolute',
         bottom: '0',
         left: '0',
         transform: 'translateY(97%)',
         background: `linear-gradient(to top right, rgba(0, 0, 0, 0) 50%, ${MainBackground}  52%)`,
      },

      '&:hover': {
         color: "#d0faf5",
         fontSize: '20px',
         cursor: 'pointer',
      }
   }
});

export default function RightButton({pushedButton, setPushedButton}:PropsInterface) {
   const classes = useStyles();

   function onClick () {
      setPushedButton(!pushedButton);
   }

   return (
      <div className={classes.rightButton} onClick={() => onClick()}>{pushedButton ? "<" : ">"}</div>
   )
}