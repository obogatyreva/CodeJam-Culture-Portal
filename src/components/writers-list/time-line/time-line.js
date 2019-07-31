import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const color = '#3f51b5';

const WriterTimeLine = (props) =>{
  const { info } = props;

  return (
   <>
     <Timeline lineColor={'#ddd'}>
       {info.map((fact, index) => (
        <TimelineItem
         key={`biography${index}`}
         dateText={fact.data}
         dateInnerStyle={{ background: color}}
        >
          <Typography gutterBottom variant="overline" component="overline">
            {fact.info}
          </Typography>
        </TimelineItem>
       ))}
     </Timeline>
   </>
  )
};
export default  WriterTimeLine;