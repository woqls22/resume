import React from "react";
import "./App.css";
import { Paper, Typography } from "@material-ui/core";
import profilePic from "../src/resources/picture.png";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ProjectCard from "./card";
export default function Projects() {
  return (
    <>
      <div className="slide">
        <div
          style={{
            fontSize: "2.5rem",
            textAlign: "left",
            marginLeft: "5rem",
            paddingTop: "0.5rem",
            color: "#FFFFFF",
          }}
        >
          <strong>P</strong>ROJECTS
        </div>
        <div
          className="ProjectCell2 "
          style={{ float: "center", marginLeft: "4rem", display: "flex" }}
        >
          <div className="ProjectPaper">
            <ProjectCard
              link={
                "https://blog.kakaocdn.net/dn/6xCfx/btq2s05l9Oh/7eV6JNkIdbZinR3eqYpGg0/img.png"
              }
              number={1}
              projectTitle={"개인정보 비식별 조치 모듈 개발"}
              period={"2020.12.28~2021.03.25"}
              stack={"ARX, SpringBoot, TiberoDB, React.js"}
              info={[
                "티맥스의 제품인 하이퍼데이터 내 비식별 조치 모듈의 기획 및 연구개발을 진행했습니다.",
                <br />,
                "기획부터 서비스 구현, UI작업까지 모든 부분에 대해 개발을 진행했으며, ARX 오픈소스를 활용하여 조치이후 각 레코드조합에 따른  위험도 분석 기능을 개발했습니다.",
              ]}
              contribute={"기획, 연구, 개발, 통합"}
              githubLink={"https://metaforeverything.tistory.com/6"}
            />
          </div>
          <div className="ProjectPaper">
            <ProjectCard
              link={
                "https://github.com/woqls22/StockNews/raw/master/BackEnd/PythonScripts/Resources/Demo.gif"
              }
              number={2}
              projectTitle={"주가 예측 서비스"}
              period={"2020.09.18~2020.09.21"}
              stack={"React.js, SpringBoot, Aws RDS, NCP"}
              info={[
                "뉴스 데이터를 분석하여 종목의 주가 상승 및 하락을 예측하는 웹서비스를 구현했습니다.",
                <br />,
                <br />,
                " 백엔드 모듈, 뉴스데이터 크롤링 모듈 작성, 예측모델 학습 및 구축, 모듈 통합, 클라우드 서버 임포트 작업을 진행했습니다. ",
              ]}
              contribute={"BackEnd,Integration"}
              githubLink={"https://github.com/woqls22/StockNews"}
            />
          </div>
          <div className="ProjectPaper">
            <ProjectCard
              link={
                "https://github.com/woqls22/OSS_Project/raw/master/src/1.JPG"
              }
              number={3}
              projectTitle={"이미지 스캔 웹서비스 구현"}
              period={"2020.05.11~2020.06.14"}
              stack={
                "Pytesseract, OpenCV, Express.js, AWS ec2, React.js, Naver Papago API"
              }
              info={[
                "사용자로부터 이미지를 업로드받고, 사진을 바탕으로 서류를 스캔해주는 서비스입니다.",
                <br />,
                <br />,
                "OCR라이브러리를 활용하여 이미지로부터 Text를 추출, 파파고 api를 통해 번역기능을 구현하였습니다.",
              ]}
              contribute={"기획, 개발, 배포"}
              githubLink={"https://github.com/woqls22/OSS_Project"}
            />
          </div>

          <div className="ProjectPaper">
            <ProjectCard
              link={
                "https://github.com/woqls22/MakeUpProject/raw/master/Resources/makeup.PNG"
              }
              number={4}
              projectTitle={"인물 사진 바탕 화장 및 Clothes Swap"}
              period={"2020.07.13~2020.08.18"}
              stack={"Python, OpenCV, dlib"}
              info={[
                "인물사진을 바탕으로 make up을 진행하며, 사용자의 설정값에 따라 각 Face Part Layer를 추출하는 프로젝트입니다.",
                <br />,
                <br />,
                "MakeUp모듈, Hair Segmentation, FacePart Layer Extraction 기능을 개발했습니다.",
                <br />,
                "Clothes Swap기능을 구현하였습니다.",
              ]}
              contribute={"기획, 개발"}
              githubLink={"https://github.com/woqls22/MakeUpProject"}
            />
          </div>
          <div className="ProjectPaper">
            <ProjectCard
              link={
                "https://github.com/woqls22/Autonomus-Vehicle/raw/master/Scripts/Resources/test.gif"
              }
              number={5}
              projectTitle={"자율주행카트 영상처리 기반 시뮬레이션 프로젝트"}
              period={"2020.07.12~2020.08.02"}
              stack={"OpenCV,Yolo v3,  Python"}
              info={[
                "자율주행 카트에서의 영상처리 모듈을 개발하였습니다.",
                <br />,
                "OpenCV를 활용하여 자율주행 모듈을 개발, Ros시뮬레이션 주행에 적용하였습니다.",
                <br />,
                "차선인식모듈과 장애물인식모듈, HW제어 모듈을 구현하였습니다.",
              ]}
              contribute={"기획, 개발"}
              githubLink={"https://github.com/woqls22/Autonomus-Vehicle"}
            />
          </div>
        </div>
      </div>
      <div className="slide">
        <div
          className="ProjectCell2 "
          style={{ float: "center", marginLeft: "4rem", display: "flex" ,paddingTop: "3rem"}}
        >
          <div className="ProjectPaper">
            <ProjectCard
              link={
                "https://blog.kakaocdn.net/dn/usdZM/btq2xb5TnPA/mz7kj58IANNsq2oF92kkz0/img.png"
              }
              number={6}
              projectTitle={"Meta Management 개발"}
              period={"2021.04.01~2021.07.01"}
              stack={"TiberoDB, React.js, JAVA"}
              info={[
                "티맥스의 제품인 하이퍼데이터 내 MetaManagement모듈을 개발했습니다.",
                <br />,
                "React Flow Renderer를 기반으로 컬럼간관계에 대한 CRUD를 그래프형태로 구현하였으며, ",
                <br />,
                "DCAT표준에 맞춘 컬럼간 Categorization기능을 개발했습니다.",
                <br />,
              ]}
              contribute={"기획, 연구, 개발"}
              githubLink={""}
            />
          </div>
          <div className="ProjectPaper">
            <ProjectCard
              link={
                "https://github.com/woqls22/MetaData_dcat/raw/master/img_1.png"
              }
              number={7}
              projectTitle={"DCAT Parser BackEnd 모듈개발"}
              period={"2021.04.19~2021.04.25"}
              stack={"TiberoDB, JAVA, hp-jena"}
              info={[
                "데이터 관계 정의 표준인 DCAT을 기반으로 하이퍼데이터 내 Export, Import 파서를 개발하였습니다.",
                <br />,
                "카탈로그 메타를 정의하는 Dcat을 기반으로 하이퍼데이터 내 Data Object와의 연동기능을 구현하였습니다.",
                <br />,
              ]}
              contribute={"기획, 연구, 개발"}
              githubLink={""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
