import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import WriterMinimalCard from './writer-minimal-card'


const useStyles = makeStyles(theme => ({
  header: {
    marginTop: 60,
    marginLeft: 40,
  },
}));

const WriterOfTheDay = (info) =>{
  const classes = useStyles();

  return (
   <>
     <Typography paragraph variant="h5" component="h1" className={classes.header}>
       Writer of the day
     </Typography>
     <WriterMinimalCard {...info} />
   </>
  )
}

export default WriterOfTheDay;