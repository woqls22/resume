import React from "react";
import "./App.css";
import { Paper, Typography } from "@material-ui/core";
import profilePic from "../src/resources/picture.png";
import "fullpage.js/vendors/scrolloverflow";
export default function MobileFirst() {
  return (
      <div
        className="section"
        style={{
          color: "#FFFFFF",
          textAlign: "right",
          paddingRight: "3rem",
          display:"relative",
          backgroundRepeat:"no-repeat",
          backgroundImage: `url("https://i.pinimg.com/originals/d7/f4/50/d7f4501dca2c4b61e1e34deb28394c0e.jpg")`,
          fontSize:"1.2rem"
        }}
      >
        <h3>
          FullStack Developer
          <br />
          개발자 <strong>이재빈</strong>입니다
          <br/>
        </h3>
        <div style={{marginTop:"3rem"}}>
        <Paper
          elevation={3}
          style={{
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img src={profilePic} height="100rem" />
            </div>
            <div
              style={{
                marginLeft: "1rem",
                marginTop: "-1.8rem",
                textAlign: "left",
              }}
            >
              <div style={{ marginTop: "0.3rem" }}>
                <Typography variant="caption">
                  {" "}
                  <br />
                  <strong>Email : </strong>woqls226@gmail.com
                  <br /> <strong>Phone:</strong>{" "}+82)01039041931
                  <br />
                  <strong> Office</strong> : TMAX BI
                  <br />
                  <strong>Github:</strong>
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
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
            marginBottom: "-8rem",
            marginLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div>
            <div
              style={{
                marginTop: "-0.3rem",
                textAlign: "left",
                marginBottom:"0.1rem",
                paddingBottom:"0.3rem"
              }}
            >
              <div style={{ marginTop: "0.1rem" }}>
                <Typography variant="caption" >
                  {" "}
                  * Tmax BI AB1-2팀 메타데이터 파트 재직
                  <br /> 
                  * 경희대학교 컴퓨터공학과 학사
                 <br/>
                 *  HyperData 개인정보 비식별화 모듈 기획,개발
                <br/>
                *  HyperData 마스터 데이터 매니지먼트 기획, 개발
                </Typography>
              </div>
            </div>
          </div>
        </Paper>
        </div>
      </div>
  );
}
