import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from "react";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight:550,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.6)',
  },
  title: {
    marginTop:"-1rem",
    fontSize: 9,
  },
  pos: {
    marginBottom: 12,
  },
  borderRadius:25
});
export default function ProjectCard(props) {
  const classes = useStyles();
  const [imgDialogOpen,setImgDialogOpen]=useState(false);
  const [imgLink,setImgLink]=useState("");
  const openDialog=(link)=>{
    setImgLink(props.link);
    setImgDialogOpen(true);
  }
  const closeDialog=()=>{
    setImgLink("");
    setImgDialogOpen(false);
  }
  return (
    <Card className={classes.root}>
        <div style={{textAlign:"center", marginTop:"4%", marginLeft:"0.5rem", marginRight:"0.5rem"}}>
        <img src={props.link} alt="project"  width="275" height="200" onClick={()=>{openDialog(props.link)}}/>
        </div>
      <CardContent>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          프로젝트{props.number} <br/> 이미지를 클릭하시면 확대해서 보실 수 있습니다.
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
        <Typography variant="body2" component="p" style={{marginBottom:"-1rem"}}>
          {props.info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        style={{marginLeft:"80%"}}
        size="small" href={props.githubLink}  target='_blank' ><strong>세부 정보</strong></Button>
      </CardActions>
          <Dialog
              open={imgDialogOpen}
              onClose={closeDialog}
              aria-labelledby="form-dialog-title"
              maxWidth={false}
            >
              <DialogTitle id="form-dialog-title">
                <strong>PROJECT IMG</strong>
              </DialogTitle>
              <DialogContent>
                <div style={{ display: "flex", width: "100%" }}>
                <img src={imgLink}  style={{ width: "100%" }}alt="project"/>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDialog}>확인</Button>
              </DialogActions>
            </Dialog>
    </Card>
  );
}