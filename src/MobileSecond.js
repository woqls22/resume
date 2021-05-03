import React from "react";
import "./App.css";
import { Paper, Typography,Button } from "@material-ui/core";
import profilePic from "../src/resources/picture.png";
import "fullpage.js/vendors/scrolloverflow";
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
} from "@material-ui/core";
export default function MobileSecond() {
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
      <div style={{marginRight:"1rem", paddingBottom:"5rem"}}>
        <TableContainer
          style={{ marginTop: "1rem"}}
          component={Paper}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">프로젝트명</TableCell>
                <TableCell align="center">상세보기</TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell align="center">개인정보 비식별 조치 모듈 개발</TableCell>
              <TableCell align="center"><a href = {"https://metaforeverything.tistory.com/6"}><FindInPageIcon/></a></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">주가 예측 서비스</TableCell>
              <TableCell align="center"><a href = {"https://github.com/woqls22/StockNews"}><FindInPageIcon/></a></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">이미지 스캔 웹서비스</TableCell>
              <TableCell align="center"><a href = {"https://github.com/woqls22/OSS_Project"}><FindInPageIcon/></a></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">MakeUp Project</TableCell>
              <TableCell align="center"><a href = {"https://github.com/woqls22/MakeUpProject"}><FindInPageIcon/></a></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">자율주행카트 영상처리</TableCell>
              <TableCell align="center"><a href = {"https://github.com/woqls22/Autonomus-Vehicle"}><FindInPageIcon/></a></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Meta Management 개발</TableCell>
              <TableCell align="center"><a href = {"https://github.com/woqls22/MetaData_dcat"}><FindInPageIcon/></a></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">DCAT Parser BackEnd 모듈개발</TableCell>
              <TableCell align="center"><a href = {"https://github.com/woqls22/MetaData_dcat"}><FindInPageIcon/></a></TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
