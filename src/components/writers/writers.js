import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import WriterMinimalCard from '../writer-of-the-day';

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: 60,
    marginLeft: 40,
  },
}));

const WriterOfTheDay = (props) => {
  const classes = useStyles();

  const { writersInfo } = props

  return (
   <>
     <Typography paragraph variant="h5" component="h1" className={classes.header}>
       Writers
     </Typography>
     {writersInfo.map((writerInfo) => (<WriterMinimalCard {...writerInfo} />))}
   </>
  )
}

export default  WriterOfTheDay;