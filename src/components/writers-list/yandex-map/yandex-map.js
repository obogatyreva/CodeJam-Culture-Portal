import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { YMaps, Map } from 'react-yandex-maps';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    mapConteiner: {
        display: 'grid',
        justifyContent: 'center',
        marginTop: 50,
    },
    mapBox: {
        marginBottom: 50,
    }
}));

const YandexMap = (props) => {
    const classes = useStyles();

    const { info } = props;


    return (
        <Box className={classes.mapConteiner}>
            {info.map((geoActivity) => {

                const geoCoordsStart = geoActivity.info.search('@') + 1;
                const geoCoordsEnd = geoCoordsStart + 21;
                const geoCoord = geoActivity.info.slice(geoCoordsStart, geoCoordsEnd).split(',');

                return (
                    <Box className={classes.mapBox}>
                         <Typography paragraph variant="overline" component="overline" className={classes.shortAbout}>
                            {geoActivity.data}
                        </Typography>
                        <YMaps >
                            <div>
                                <Map 
                                style={{width: `${window.innerWidth - 150}px`, height: `255px`}} 
                                defaultState={{ center: [+geoCoord[0], +geoCoord[1]], zoom: 10,}} 
                                />
                            </div>
                        </YMaps>
                    </Box>
                )
            })}
        </Box>
    )
}

export default YandexMap;