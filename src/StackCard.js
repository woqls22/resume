import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight:430,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.6)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  borderRadius:25
});
export default function StackCard(props) {
    const classes = useStyles();
    return (
      <Card className={classes.root}>
          <div style={{textAlign:"center", marginTop:"4%"}}>
          <img src={props.link} alt="project"  width="275" height="200"/>
          </div>
        <CardContent>
          <Typography >
           <strong>{props.projectTitle}</strong>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            사용 기간 : {props.period}
          </Typography>
          <br/>
          <Typography variant="body2" component="p">
            {props.info}
          </Typography>
        </CardContent>
      </Card>
    );
  }