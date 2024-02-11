import React, { Dispatch } from "react";
import {makeStyles} from '@material-ui/core/styles';
import {MainBackground} from '../utility';



const useStyles = makeStyles({
   leftButton: {
      minWidth: '20px',
      height: '100px',
      background: MainBackground,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
      marginLeft: '100%',
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
         background: `linear-gradient(to top right, ${MainBackground} 50%, rgba(0, 0, 0, 0) 52%)`,
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
         background: `linear-gradient(to top left, rgba(0, 0, 0, 0) 50%, ${MainBackground}  52%)`,
      },

      '&:hover': {
         color: "#d0faf5",
         fontSize: '20px',
         cursor: 'pointer',
      }
   }
});

export default function LeftButton({pushedButton, setPushedButton}:any) {
   const classes = useStyles();

   function onClick () {
      setPushedButton(!pushedButton);

   }

   return (
      <div className={classes.leftButton} onClick={() => onClick()}>{!pushedButton ? "<" : ">"}</div>
   )
}