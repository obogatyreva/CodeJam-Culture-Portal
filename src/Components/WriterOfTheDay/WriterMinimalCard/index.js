import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        padding: '5px',
        marginBottom: '10px'
    },
    img: {
        margin: '0 5px 5px 0',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'start',
        alignContent: 'top',
        alignItems: 'top',
    },
    writerName: {
        margin: '12px 0 10px 0',
    },
}));

export default function WriterMinimal(info) {
    const classes = useStyles();
    const { fullName, yearsOfLife, photo, shortAbout } = info

    return (
        <Card className={classes.card} >
            <CardActionArea >
                <img 
                src={photo.url}
                alt={fullName}
                width={photo.width}
                align="left"
                className={classes.img}
                />
                <Typography gutterBottom variant="h5" component="h2" className={classes.writerName}>
                    {fullName}
                </Typography>
                <Typography gutterBottom variant="body2" component="h2" >
                    {yearsOfLife}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" >
                    {shortAbout}
                </Typography>
            </CardActionArea>
        </Card>
    )
}