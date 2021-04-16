import React from 'react';
import "./App.css";
import {
  Paper,
  Typography,
} from "@material-ui/core";
import profilePic from "../src/resources/picture.png";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
export default function Section1(){
    return(   
            <div >
                <div className="TopImg">
                  <div className="TopTitle">
                  <Typography variant="h3">FullStack Developer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br/></Typography>
                            개발자 &nbsp;<strong>이재빈</strong> 입니다
                 </div>
                </div>
                <Summary/>
             </div>
            );
}
function Summary(){
    return(
    <>
      <div className="ProjectCell1">
        <Paper
          elevation={3}
          style={{
            paddingRight: "5rem",
            paddingLeft: "3rem",
            marginTop: "1rem",
            marginBottom: "1rem",
            marginRight: "1rem",
            marginLeft: "3rem",
          }}
        >
          <h2 style={{ marginLeft: "6.1rem" }}>LEE JAE BEEN</h2>
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{ marginTop: "-4rem", marginLeft: "-2rem" }}
                src={profilePic}
                height="170rem"
              />
            </div>
            <div style={{ marginLeft: "2rem", marginTop: "-0.3rem" }}>
                <div  style={{marginTop:"0.3rem"}}>
                <Typography variant="caption">
                {" "}
                <strong>Email&nbsp; :&nbsp;</strong>woqls226@gmail.com
                <br />
                {" "}
                <strong>Phone&nbsp; :&nbsp;</strong>+82)01039041931
                <br />
                <strong>Github&nbsp; :&nbsp;</strong>
                <a href="https://github.com/woqls22">
               https://github.com/woqls22
                </a>
              </Typography>
                </div>
            </div>
          </div>
        </Paper>
        <Paper
          elevation={3}
          style={{
            paddingRight: "3rem",
            paddingLeft: "3rem",
            marginTop: "1rem",
            marginBottom: "1rem",
            marginRight: "1rem",
          }}
        >
          <h2>career</h2>
          <div  style={{marginTop:"-0.7rem"}}>
                <Typography variant="caption">
                     &nbsp;Tmax BI AB1-2팀 메타데이터 파트 재직중
                    <br />
                        {" "}
                        &nbsp;경희대학교 컴퓨터공학과 학사
                    <br />
                    &nbsp;빅데이터 플랫폼 하이퍼데이터 내 개인정보 비식별화 모듈 기획,
                    개발
                    <br />
                    &nbsp;HyperData Studio 마스터 데이터 매니지먼트 기획, 개발
                    <br />
              </Typography>
                </div>
        </Paper>
      </div>
    </>);
}