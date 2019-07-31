import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { YMaps, Map } from 'react-yandex-maps';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mapBox: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
    },
}));

export default function YandexMap() {
    const classes = useStyles();

    return (
        <Box className={classes.mapBox}>
            <YMaps >
                <div>
                    <Map 
                    style={{width: `${window.innerWidth - 150}px`, height: `255px`}} 
                    defaultState={{ center: [53.8847208, 27.5233292], zoom: 10,}} 
                    />
                </div>
            </YMaps>
        </Box>
    )
}