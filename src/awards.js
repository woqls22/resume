import React from 'react';
import "./App.css";
import {
  Paper,
  Typography,
} from "@material-ui/core";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import "./App.css";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
} from "@material-ui/core";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
export default function Awards(){
return(
<>
    <div className="ProjectCell3"  style={{fontSize:"2.5rem", textAlign:"left", marginTop:"-20rem", color:"#FFFFFF"}}>
          <Typography variant="h4">
            <strong>A</strong>WARDS
          </Typography>
          <TableContainer
            style={{ maxWidth: "94%", height: "fit-content", marginTop: "1rem" }}
            component={Paper}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">구분</TableCell>
                  <TableCell align="center">대회명</TableCell>
                  <TableCell align="center">주관</TableCell>
                  <TableCell align="center">수상명</TableCell>
                  <TableCell align="center">주제</TableCell>
                  <TableCell align="center">수상일자</TableCell>
                </TableRow>
              </TableHead>
              <TableRow hover={true}>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">제 8회 핀테크 해커톤</TableCell>
                <TableCell align="center">한국인터넷진흥원(KISA)</TableCell>
                <TableCell align="center">우수상</TableCell>
                <TableCell align="center">
                  뉴스데이터 분석을 통한 주가예측 서비스
                </TableCell>
                <TableCell align="center">2020.09.15</TableCell>
              </TableRow>
              <TableRow hover={true}>
                <TableCell align="center">2</TableCell>
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
  </>
  );
}