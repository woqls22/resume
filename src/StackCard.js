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
    minHeight:370,
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
    marginBottom: 10,
  },
  borderRadius:25
});
export default function StackCard(props) {
    const classes = useStyles();
    return (
      <Card className={classes.root}>
          <div style={{textAlign:"center", marginTop:"4%", marginLeft:"0.5rem", marginRight:"0.5rem"}}>
          <img src={props.link} alt="project"  width="280" height="170"/>
          </div>
        <CardContent>
           <strong>{props.projectTitle}</strong>
           <br/>
          <Typography className={classes.pos} color="textSecondary" variant={"caption"}>
            사용 기간 : {props.period}
          </Typography>
          <Typography variant="caption" component="p">
            {props.info}
          </Typography>
        </CardContent>
      </Card>
    );
  }