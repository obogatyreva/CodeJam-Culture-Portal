import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Container } from '@material-ui/core';

import WriterTimeLine from './TimaLine';
import Video from './Video';
import PhotoGallery from './PhotoGallery';
import YandexMap from './GeoMap/YandexMap';


const useStyles = makeStyles(theme => ({
    header: {
        marginTop: 60,
        marginLeft: 40,
    },
    shortInfoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    shortAbout: {
        maxWidth: 500,
        margin: 20,
    }
}));

export default function WriterList(props) {
    const classes = useStyles();

    const { writerInfo } = props;
    const { fullName, 
        yearsOfLife, 
        photo, 
        shortAbout, 
        biography, 
        artistsWorksList, 
        photoGalleryURL, 
        VideoGalleryURL,
        geoActivityURL } = writerInfo

    return (
        <>
        <Typography paragraph variant="h5" component="h1" className={classes.header}>
            {fullName}
        </Typography>

        <Typography paragraph variant="overline" component="overline" className={classes.header}>
            {yearsOfLife}
        </Typography>

        <Container className={classes.shortInfoContainer}>
            <CardMedia style={{ maxWidth: `${photo.width}px`, margin: '5px'}}
                className={classes.mainPhoto}
                component="img"
                alt={fullName}
                height={photo.width}
                image={photo.url}
                title={fullName}
            />
            <Typography paragraph variant="overline" component="overline" className={classes.shortAbout}>
                {shortAbout}
            </Typography>
        </Container>

        <YandexMap info={geoActivityURL}/>

        <Typography paragraph variant="h6" component="h6"  className={classes.header}>
            Biography
        </Typography>

        <WriterTimeLine info={biography}/>

        <Typography paragraph variant="h6" component="h6"  className={classes.header}>
            Artists works
        </Typography>

        <WriterTimeLine info={artistsWorksList}/>

        <PhotoGallery info={photoGalleryURL} />

        <Video info={VideoGalleryURL}/>

        

        </>
    )
}