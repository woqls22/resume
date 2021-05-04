import React from "react";
import "./App.css";
import { Paper, Typography, Button } from "@material-ui/core";
import "fullpage.js/vendors/scrolloverflow";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";

export default function MobileSecond() {
  const [open, setOpen] = useState(false);
  const [imgDialogOpen, setImgDialogOpen] = useState(false);
  const [imgLink, setImgLink] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const openDialog = (link) => {
    setImgLink(link);
    setImgDialogOpen(true);
  };
  const closeDialog = () => {
    setImgLink("");
    setImgDialogOpen(false);
  };

  return (
    <div
      className="section"
      style={{
        color: "#FFFFFF",
        textAlign: "left top",
        paddingLeft: "1rem",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://cdn.shopify.com/s/files/1/0689/4173/products/diagonal_marble_3_wallpaper_square_web__21327.1559316435_1024x1024.jpg?v=1615776803")`,
        fontSize: "1.2rem",
      }}
    >
      <h3>Projects</h3>
      <div style={{ marginRight: "1rem", paddingBottom: "5rem" }}>
        <TableContainer style={{ marginTop: "1rem" }} component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">Project</TableCell>
                <TableCell align="center">Detail</TableCell>
                <TableCell align="center">Repository</TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell align="center">
                개인정보 비식별 조치 모듈 개발
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={()=>openDialog(
                    "https://blog.kakaocdn.net/dn/6xCfx/btq2s05l9Oh/7eV6JNkIdbZinR3eqYpGg0/img.png"
                  )}
                >
                  <FindInPageIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <a href={"https://metaforeverything.tistory.com/6"}>
                  <FindInPageIcon />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">주가 예측 서비스</TableCell>
              <TableCell align="center">
                <Button
                  onClick={()=>openDialog(
                    "https://github.com/woqls22/StockNews/raw/master/BackEnd/PythonScripts/Resources/Demo.gif"
                  )}
                >
                  <FindInPageIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <a href={"https://github.com/woqls22/StockNews"}>
                  <FindInPageIcon />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">이미지 스캔 웹서비스</TableCell>
              <TableCell align="center">
                <Button
                  onClick={()=>openDialog(
                    "https://github.com/woqls22/OSS_Project/raw/master/src/1.JPG"
                  )}
                >
                  <FindInPageIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <a href={"https://github.com/woqls22/OSS_Project"}>
                  <FindInPageIcon />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">MakeUp Project</TableCell>
              <TableCell align="center">
                <Button
                  onClick={()=>openDialog(
                    "https://github.com/woqls22/MakeUpProject/raw/master/Resources/makeup.PNG"
                  )}
                >
                  <FindInPageIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <a href={"https://github.com/woqls22/MakeUpProject"}>
                  <FindInPageIcon />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">자율주행카트 영상처리</TableCell>
              <TableCell align="center">
                <Button
                  onClick={()=>openDialog(
                    "https://github.com/woqls22/Autonomus-Vehicle/raw/master/Scripts/Resources/test.gif"
                  )}
                >
                  <FindInPageIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <a href={"https://github.com/woqls22/Autonomus-Vehicle"}>
                  <FindInPageIcon />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Meta Management 개발</TableCell>
              <TableCell align="center">
                <Button
                  onClick={()=>openDialog(
                    "https://blog.kakaocdn.net/dn/usdZM/btq2xb5TnPA/mz7kj58IANNsq2oF92kkz0/img.png"
                  )}
                >
                  <FindInPageIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button  onClick={handleClickOpen} >
                <FindInPageIcon/>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">DCAT Parser BackEnd 모듈개발</TableCell>
              <TableCell align="center">
                <Button
                  onClick={()=>openDialog(
                    "https://github.com/woqls22/MetaData_dcat/raw/master/img_1.png"
                  )}
                >
                  <FindInPageIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <a href={"https://github.com/woqls22/MetaData_dcat"}>
                  <FindInPageIcon />
                </a>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Project Info"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            사규정으로 인해 관련 정보 제공이 어렵습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
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
            <img src={imgLink} style={{ width: "100%", height:"auto" }} alt="project" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>확인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
