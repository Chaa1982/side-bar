import React, { Dispatch, useCallback } from "react";
import {makeStyles} from '@material-ui/core/styles';
import {MainBackground} from '../utility';

interface PropsInterface {
   pushedButton: boolean,
   setPushedButton: Dispatch<boolean>,
   side: 'left' | 'right',
}

const useStyles = makeStyles({
   button: {
      minWidth: '20px',
      height: '100px',
      background: MainBackground,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
      marginLeft: (props: PropsInterface) => props.side === 'left' ? '100%' : "-20px",
      position: 'relative',
      
      '&::before':  {
         display: 'block',
         content: "''",
         width: '100%',
         height: '30px',
         position: 'absolute',
         top: '0',
         left: '0',
         transform: 'translateY(-97%)',
         background: (props: PropsInterface) => props.side === 'left' 
            ?`linear-gradient(to top right, ${MainBackground} 50%, rgba(0, 0, 0, 0) 52%)`
            :`linear-gradient(to top left, ${MainBackground} 50%, rgba(0, 0, 0, 0) 52%)`,
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
         background: (props: PropsInterface) => props.side === 'left'
            ? `linear-gradient(to top left, rgba(0, 0, 0, 0) 50%, ${MainBackground}  52%)`
            : `linear-gradient(to top right, rgba(0, 0, 0, 0) 50%, ${MainBackground}  52%)`,

      },

      '&:hover': {
         color: "#d0faf5",
         fontSize: '20px',
         cursor: 'pointer',
      }
   }
});

export default function MyButton(props:PropsInterface) {
   const classes = useStyles(props);

   function onClick () {
      console.log("new render")
      props.setPushedButton(!props.pushedButton);
   }
   console.log("new render2")
   return (
      <div className={classes.button} onClick={() => onClick()}>
         {props.side === 'left' 
            ? props.pushedButton ? ">" : "<"
            : !props.pushedButton ? ">" : "<"
         }
      </div>
   )
}