import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import WriterMinimalCard from './WriterMinimalCard'


const useStyles = makeStyles(theme => ({
    header: {
        marginTop: 60,
        marginLeft: 40,
    },
}));

export default function WriterOfTheDay(info) {
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