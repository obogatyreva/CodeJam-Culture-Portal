import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/PermIdentity'; 
import People from '@material-ui/icons/People';
import DevTeam from '@material-ui/icons/Build';

import Search from '../Search'
import WriterOfTheDay from '../WriterOfTheDay';
import DeveloversTeam from '../DevelopersTeam';

const info = {
  writerOfTheDay: {
    fullName: 'Lavon Volski',
    yearsOfLife: '14 September  1965 - in our time',
    photo: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvyzIFOqgN_gT_VxXixU5tlW2ZZkQWTN8iDFFQAdIz55FX8-u',
      width: 255,
    },
    shortAbout: '(Belarusian: Леанід Арту́равіч «Ляво́н» Зэйдэль-Во́льскі. Belarusian rock-musician, cultural figure, an author of music and lyrics, poet, artist, group leader of N.R.M.[1] and Krambambula[2][3], the owner of numerous musical awards, both personal and as a member of various collectives. He is the son of Artur Volski, who is a known Belarusian writer.',
  },
  develoversTeam: {
    aleksandr: {
      firstName: 'Aleksandr',
      secondName: "Lazarev",
      photo: {
        url: 'https://pp.userapi.com/c858220/v858220086/229bb/PI0xPP7E7LU.jpg',
        width: 255,
      },
      about: "Reaching the top, be ready to be at the bottom of the next level",
      position: "group 26",
      scope: "collaboration",
    },
    olga: {
      firstName: "Olga",
      secondName: "Bogatyreva",
      photo: {
        url: 'https://pp.userapi.com/c856020/v856020533/a2449/g9-KCpXZyas.jpg',
        width: 255,
      },
      about: "Work hard to get what you like, otherwise you'll be forced to just like what you get.",
      position: "group 26",
      scope: "collaboration"
    },
  }
}


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
              [classes.hide]: open,
              })}
          >
          <MenuIcon />
          </IconButton>
          <Search />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key='Writer of the day'>
              <ListItemIcon> <Person /> </ListItemIcon>
              <ListItemText primary='Writer of the day' />
            </ListItem>
        </List>
        <List>
            <ListItem button key='Writers'>
              <ListItemIcon> <People /> </ListItemIcon> 
              <ListItemText primary='Writers' />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key='Developers team'>
              <ListItemIcon> <DevTeam /> </ListItemIcon> 
              <ListItemText primary='Developers team' />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key='EN'>
              <ListItemIcon> EN </ListItemIcon> 
              <ListItemText primary='English' />
            </ListItem>
            <ListItem button key='RU'>
              <ListItemIcon> RU </ListItemIcon> 
              <ListItemText primary='Russian' />
            </ListItem>
            <ListItem button key='BE'>
              <ListItemIcon> BY </ListItemIcon>
              <ListItemText primary='Belarus' />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        
        <WriterOfTheDay {...info.writerOfTheDay} />
        <DeveloversTeam {...info.develoversTeam} />
        
      </main>
    </div>
  );
}