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
    minHeight:580
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
export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <div style={{textAlign:"center", marginTop:"4%"}}>
        <img src={props.link} alt="project"  width="275" height="200"/>
        </div>
      <CardContent>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          프로젝트{props.number}
        </Typography>
        <Typography >
         <strong>{props.projectTitle}</strong>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          기간 : {props.period}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
         담당부분 : {props.contribute}<br/>
          기술 스택 : {props.stack}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          {props.info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        style={{marginLeft:"80%"}}
        size="small" href={props.githubLink}  target='_blank' ><strong>세부 정보</strong></Button>
      </CardActions>
    </Card>
  );
}