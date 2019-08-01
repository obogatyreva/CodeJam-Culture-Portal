import React from 'react';
import clsx from 'clsx';
import {Link} from 'gatsby';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
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
import Typography from '@material-ui/core/Typography';


import WriterOfTheDay from '../writer-of-the-day';
import DeveloversTeam from '../developers-team';
import Writers from '../writers'
import WriterList from '../writers-list'


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

const MiniDrawer = ({children}) =>{
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
          <Typography variant="h6" noWrap>
            Writers of Belarus
          </Typography>
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
          <Link to="/">
         <ListItem button key='Main'>
           <ListItemIcon><Person /></ListItemIcon>
           <ListItemText primary='Main' />
         </ListItem>
          </Link>
         <Link to="/page-2">
         <ListItem button key='Writers'>
           <ListItemIcon><People /></ListItemIcon>
           <ListItemText primary='Writers' />
         </ListItem>
         </Link>
       </List>
       <Divider />
       <List>
         <ListItem button key='Developers team'>
           <ListItemIcon><DevTeam /></ListItemIcon>
           <ListItemText primary='Developers team' />
         </ListItem>
       </List>
       <Divider />
       <List>
         <ListItem button key='EN'>
           <ListItemIcon><span>EN</span></ListItemIcon>
           <ListItemText primary='English' />
         </ListItem>
         <ListItem button key='RU'>
           <ListItemIcon><span>RU</span></ListItemIcon>
           <ListItemText primary='Russian' />
         </ListItem>
         <ListItem button key='BE'>
           <ListItemIcon><span>BE</span></ListItemIcon>
           <ListItemText primary='Belarus' />
         </ListItem>
       </List>
     </Drawer>
     <main className={classes.content}>
       {children}
        {/* <WriterList writerInfo={info.writers[0]}/> */}
     </main>
  </div>
  );
};

export default MiniDrawer;
