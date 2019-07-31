import React from 'react';
import clsx from 'clsx';
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

import Search from '../Search'
 import WriterOfTheDay from '../writer-of-the-day';
// import DeveloversTeam from '../developers-team';
import Writers from '../writers'
import WriterList from '../writers-list'


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
        url: 'https://pp.userapi.com/c858428/v858428779/2645d/rVCg1XFAYAk.jpg',
        width: 255,
      },
      about: "Work hard to get what you like, otherwise you'll be forced to just like what you get.",
      position: "group 26",
      scope: "collaboration"
    },
  },
  writers: [
    {
      fullName: 'Lavon Volski 1',
      yearsOfLife: '14 September  1965 - in our time',
      photo: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvyzIFOqgN_gT_VxXixU5tlW2ZZkQWTN8iDFFQAdIz55FX8-u',
        width: 255,
      },
      shortAbout: '(Belarusian: Леанід Арту́равіч «Ляво́н» Зэйдэль-Во́льскі. Belarusian rock-musician, cultural figure, an author of music and lyrics, poet, artist, group leader of N.R.M.[1] and Krambambula[2][3], the owner of numerous musical awards, both personal and as a member of various collectives. He is the son of Artur Volski, who is a known Belarusian writer.',
      biography: [
        {
          "data":"14 September 1965",
          "info":"Born in the family of the Belarusian writer Artur Volsky-Seidel and the Russian poetess Svetlana Yevseyeva. Grandson of Vitaly Volsky-Seidel."
        },
        {
          "data":"1984",
          "info":"He studied at Minsk Art College."
        },
        {
          "data":"1994",
          "info":"He initiated the reincarnation of “Mroi” into the group “N.R.M.” (“Independent Republican Mroy”), in which he acted as the main author of music and lyrics for 2010. In parallel (1990-1998) acted as a performer on the keyboards in the group “Новае Неба”."
        },
        {
          "data":"1997",
          "info":"He wrote the music and arrangements of most of the compositions for the joint musical project “Народны альбом”, participated in the preparation, recording and showing of the joint musical projects “Святы вечар 2000” and “Я нарадзіўся тут” (2001)."
        },
        {
          "data":"23 March 1998",
          "info":"Born daughter Adelia Volskaya. Adelia - Belarusian singer, student at the University of Maria Sklodowska-Curie in Lublin"
        },
        {
          "data":"2001",
          "info":"He became the initiator of the creation of the group “Zet”, developed and wrote most of the songs for the project “Крамбамбуля”: “Застольны альбом”, “Каралі раёну”, “Радыё Крамбамбуля 0.33 FM”, “Сьвяточная”, Drabadzi-drabada and “Чырвоны штраль”"
        },
        {
          "data":"2004",
          "info":"As part of the group “Krambambulya” spoke on the Square Maidan in Kiev. Appears in the press as a poet, prose writer, journalist, worked as a leading author of the program “Kvadrakola” on the radio stations “Беларуская маладзёжная” and “101,2”. Among the most well-known songs are “Песні пра каханьне”, “Тры чарапахі”, “Партызанская”, “Паветраны шар”, “Лёгкія-лёгкія”, “Я нарадзіўся тут”, “Абсэнт”, “Госці”."
        },
        {
          "data":"2010",
          "info":"Participant of the festival “Be2gether 2010”"
        },
        {
          "data":"23 March 2016",
          "info":"The first wife Anna Volskaya, a Belarusian cultural figure, the producer of the «Крамбамбуля» group, the author of the project «Снежны завулак», died of cancer."
        },
        {
          "data":"2016",
          "info":"Winner of the international award “FreeMuse Awards”"
        }
      ],
      artistsWorksList: [
        {
          "data":"1993",
          "info":"Poetic collections «Калідор»"
        },
        {
          "data":"1998",
          "info":"«Фотаальбом»"
        },
        {
          "data":"2011",
          "info":"prose book «Міларусь»"
        }
      ],
      photoGalleryURL: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvyzIFOqgN_gT_VxXixU5tlW2ZZkQWTN8iDFFQAdIz55FX8-u",
        "https://static.relax.by/images/common/wysiwyg/2015/03/69b136f2d5df2bca71657aa7d6380aab.jpg",
        "https://d28g7970w5bq8z.cloudfront.net/p/articles/ai-154806-aux-head-20150609_liawon_new_t.jpg",
        "http://show-biz.by/blog/image/blog_image/2393/large/_v=7c4781477344086"
      ],
      VideoGalleryURL: [
        "https://www.youtube.com/watch?v=mTH704CrE0U",
        "https://www.youtube.com/watch?v=9xn0Tcjb_64"
      ],
      geoActivityURL:[
        {
          "data":"14 September  1965 - in our time",
          "info":"https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.8847208,27.5233292,12z/data=!3m1!4b1!4m5!3m4!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972"
        }
      ]
    },
    {
      fullName: 'Lavon Volski 2',
      yearsOfLife: '14 September  1965 - in our time',
      photo: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvyzIFOqgN_gT_VxXixU5tlW2ZZkQWTN8iDFFQAdIz55FX8-u',
        width: 255,
      },
      shortAbout: '(Belarusian: Леанід Арту́равіч «Ляво́н» Зэйдэль-Во́льскі. Belarusian rock-musician, cultural figure, an author of music and lyrics, poet, artist, group leader of N.R.M.[1] and Krambambula[2][3], the owner of numerous musical awards, both personal and as a member of various collectives. He is the son of Artur Volski, who is a known Belarusian writer.',
    },
    {
      fullName: 'Lavon Volski 3',
      yearsOfLife: '14 September  1965 - in our time',
      photo: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvyzIFOqgN_gT_VxXixU5tlW2ZZkQWTN8iDFFQAdIz55FX8-u',
        width: 255,
      },
      shortAbout: '(Belarusian: Леанід Арту́равіч «Ляво́н» Зэйдэль-Во́льскі. Belarusian rock-musician, cultural figure, an author of music and lyrics, poet, artist, group leader of N.R.M.[1] and Krambambula[2][3], the owner of numerous musical awards, both personal and as a member of various collectives. He is the son of Artur Volski, who is a known Belarusian writer.',
    },
  ]
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

const MiniDrawer = () =>{
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

        {/*<WriterOfTheDay {...info.writerOfTheDay} />*/}
       {/*<DeveloversTeam {...info.develoversTeam } />*/}
       {/* <Writers writersInfo={info.writers}/>*/}
       <WriterList writerInfo={info.writers[0]}/>

     </main>
  </div>
  );
};

export default MiniDrawer;
