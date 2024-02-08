import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles ({
   outWrap: {
      width: '30%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
   },
   bigBlock: {
      background: "grey",
      width: '95%',
      height: '100vh',

   },
  
   myButton: {
      width: '20px',
      height: '10%',
      background: 'grey',
      display: 'flex',
      alignItems: 'center',
      color: '#000',
      position: 'relative',
      
      '&::before': {
         display: 'block',
         content: "''",
         width: '100%',
         height: '30px',
         position: 'absolute',
         top: '0',
         left: '0',
         transform: 'translateY(-100%)',
         background: 'linear-gradient(to top right, grey 50%, rgba(0, 0, 0, 0) 52%)'
        
      },
      '&::after': {
         display: 'block',
         content: "''",
         width: '100%',
         height: '30px',
         position: 'absolute',
         bottom: '0',
         left: '0',
         transform: 'translateY(100%)',
         background: 'linear-gradient(to top left, rgba(0, 0, 0, 0) 50%, grey  52%)'
        
      },

      '&:hover': {
         color: "#d0faf5",
         fontSize: '20px',
         cursor: 'pointer',
      }
   },
   

})


export default function () {
   const classes = useStyles();
   return (
      <div className={classes.outWrap}>
         <div className={classes.bigBlock}></div>
            <div className={classes.myButton}>&lt;</div>
      </div>
   ) 
}