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
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    table: {
      width:820
    },
  });
export default function MobileThird() {
    const classes = useStyles();
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
      <h3>Awards</h3>
      <div style={{ marginRight: "1rem", paddingBottom: "5rem", overflowX:"auto"}}>
        <TableContainer style={{ marginTop: "1rem", overflowX:"auto" }} component={Paper}>
        <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">대회명</TableCell>
                  <TableCell align="center">주관</TableCell>
                  <TableCell align="center">수상명</TableCell>
                  <TableCell align="center">주제</TableCell>
                  <TableCell align="center">수상일자</TableCell>
                </TableRow>
              </TableHead>
              <TableRow hover={true}>
                <TableCell align="center">제 8회 핀테크 해커톤</TableCell>
                <TableCell align="center">한국인터넷진흥원(KISA)</TableCell>
                <TableCell align="center">우수상</TableCell>
                <TableCell align="center">
                  뉴스데이터 분석을 통한 주가예측 서비스
                </TableCell>
                <TableCell align="center">2020.09.15</TableCell>
              </TableRow>
              <TableRow hover={true}>
                <TableCell align="center">2020 한국컴퓨터종합학술대회</TableCell>
                <TableCell align="center">한국정보과학회</TableCell>
                <TableCell align="center">우수논문상</TableCell>
                <TableCell align="center">
                  실내 문서 전달 자율주행 카트 개발을 위한 객체 인지 및 충돌 방지
                  모듈 개발
                </TableCell>
                <TableCell align="center">2020.07</TableCell>
              </TableRow>
            </Table>
        </TableContainer>
      </div>
    </div>
  );
}
