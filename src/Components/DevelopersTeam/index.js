import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import DeveloperCard from './DeveloperCard'

const useStyles = makeStyles({
    devContainer: {
        
        display: 'flex',
        flexWrap: 'wrap',
    },
    header: {
        marginTop: 60,
        marginLeft: 40,
    },
});

export default function DevelopersTeam(info) {
    const classes = useStyles();

    const { aleksandr, olga } = info;
  
    return (
       <>
        <Typography paragraph variant="h5" component="h1" className={classes.header}>
          Developers team
        </Typography>
        <Container className={classes.devContainer} >
            <DeveloperCard {...aleksandr} />
            <DeveloperCard {...olga}/>
            <DeveloperCard {...aleksandr} />
            <DeveloperCard {...olga}/>
            <DeveloperCard {...aleksandr} />
            <DeveloperCard {...olga}/>
        </Container>
       </>
    )
}    