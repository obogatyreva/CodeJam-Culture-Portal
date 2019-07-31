import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    header: {
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const Writers = (props) => {
  const classes = useStyles();
  const { writersInfo } = props;

  return (
    <div className={classes.header}>
    <List component="nav" aria-label="main mailbox folders">
        {writersInfo.map((info) => (
            <>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt={info.fullName} src={info.photo.url} />
                </ListItemAvatar>
                <ListItemText
                primary={info.fullName}
                secondary={info.city}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            </>
        ))}
    </List>
  </div>
  );
}

export default Writers;