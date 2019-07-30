import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    minWidth: 345,
  },
  about: {
    margin: 10,
    height: 140,
  },
});

export default function DeveloperCard(info) {
  const classes = useStyles();

  const { firstName, secondName, photo, about, position, scope } = info;
  const fullName = `${firstName} ${secondName}`;

  return (
    <Card style={{ maxWidth: `${photo.width}px`, margin: '5px'}}>
        <CardMedia
          component="img"
          alt={fullName}
          height={photo.width}
          image={photo.url}
          title={fullName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {secondName}
          </Typography>
          <Box className={classes.about}>
            <Typography variant="body1" color="textSecondary" component="subtitle1" >
                {about}
            </Typography>
          </Box>
          <Typography gutterBottom variant="overline" component="p">
            {position}
          </Typography>
          <Typography gutterBottom variant="overline" component="p">
            {scope}
          </Typography>
        </CardContent>
    </Card>
  );
}