import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  videoBox: {
    display: 'grid',
    justifyItems: 'center',
  }
}));

const Video = (props) => {
  const classes = useStyles();

  const { info } = props;

  const opts = {
    height: (window.innerWidth - 150) / 1.64,
    width: (window.innerWidth - 150),
    playerVars: {
      autoplay: 1
    }
  };

  const videoId = info.map((url) => (url.slice(-11)))

  return (
   <>
     <Box className={classes.videoBox}>
       {videoId.map((id) => (
        <YouTube
         videoId={id}
         opts={opts}
         onReady={ (event) => (event.target.stopVideo()) }
        />
       ))}
     </Box>
   </>
  );
};

export default Video;