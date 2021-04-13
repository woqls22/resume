import "./App.css";
import React from "react";
import {
  Button,
  Paper,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
} from "@material-ui/core";
import ProjectCard from "./card";
import StackCard from "./StackCard";
import DocumentSlider from "./DocumentSlider";
import profilePic from "../src/resources/45088482.png";
function App() {
  const scrollToSummary = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToProject = (event) => {
    window.scrollTo({
      top: 670,
      behavior: "smooth",
    });
  };
  const scrollToAwards = (event) => {
    window.scrollTo({
      top: 1990,
      behavior: "smooth",
    });
  };
  const scrollToStacks = (event) => {
    window.scrollTo({
      top: 2200,
      behavior: "smooth",
    });
  };
  const scrollToDocument = (event) => {
    window.scrollTo({
      top: 3500,
      behavior: "smooth",
    });
    console.log("move to 0,0");
  };

  return (
    <>
      <div className="Topbg">
        <div className="TopImg">
          <div className="TopTitle">
            <div>
              개발자 &nbsp;<strong>이재빈</strong> 입니다
            </div>
          </div>
        </div>
      </div>
      <div className="Navigation">
        <div style={{ width: "30%", display: "flex" }}>
          <Button
            onClick={scrollToSummary}
            style={{ color: "#FFFFFF", marginRight: "2rem" }}
          >
            SUMMARY
          </Button>
          <Button
            onClick={scrollToProject}
            style={{ color: "#FFFFFF", marginRight: "2rem" }}
          >
            PROJECT
          </Button>
          <Button
            onClick={scrollToAwards}
            style={{ color: "#FFFFFF", marginRight: "2rem" }}
          >
            AWARDS
          </Button>
          <Button
            onClick={scrollToStacks}
            style={{ color: "#FFFFFF", marginRight: "2rem" }}
          >
            STACKS
          </Button>
          <Button
            onClick={scrollToDocument}
            style={{ color: "#FFFFFF", marginRight: "2rem" }}
          >
            DOCUMENT
          </Button>
        </div>
      </div>
      <div className="summaryTitle">
        <Typography variant="h4">
          <strong>SUMMARY</strong>
        </Typography>
      </div>
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
          <h2 style={{ marginLeft: "7.1rem" }}>LEE JAE BEEN</h2>
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{ marginTop: "-4rem", marginLeft: "-2rem" }}
                src={profilePic}
                height="170rem"
              />
            </div>
            <div style={{ marginLeft: "2rem", marginTop: "-0.3rem" }}>
              <Typography variant="subtitle0">
                {" "}
                Email &nbsp; :&nbsp; woqls226@gmail.com &nbsp;
                <br />
                <br />
              </Typography>
              <Typography variant="subtitle0">
                {" "}
                Phone &nbsp; :&nbsp; +82)01039041931 &nbsp;
                <br />
                <br />
              </Typography>
              <Typography variant="subtitle0">
                {" "}
                <a href="https://github.com/woqls22">
                  Github &nbsp; :&nbsp; https://github.com/woqls22 &nbsp;
                </a>
                <br />
              </Typography>
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
          <Typography variant="button">
            &nbsp;Tmax BI AB1-2팀 메타데이터 파트 재직중
            <br />
          </Typography>
          <Typography variant="button">
            &nbsp;경희대학교 컴퓨터공학과 학사
            <br />
          </Typography>
          <Typography variant="button">
            &nbsp;빅데이터 플랫폼 하이퍼데이터 내 개인정보 비식별화 모듈 기획,
            개발
            <br />
          </Typography>
          <Typography variant="button">
            &nbsp;하이퍼데이터 마스터 데이터 매니지먼트 기획, 개발
            <br />
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          style={{
            paddingRight: "3rem",
            paddingLeft: "3rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h2>Introduce</h2>
          <Typography variant="button">
            요구사항 분석, 설계, 평가까지의 복잡한 프로세스를 거쳐 만든
            프로그램이 많은 <br />
            사람들에게 큰 호응을 얻을 때,
            <br />
            저는 그 어떤 일보다 깊은 의미를 찾을 수 있다고 생각합니다. <br />
          </Typography>
          <Typography variant="button">
            끊임없이 시도하고 실패하는 과정속에서 의미를 찾고 성장하는 개발자가
            되고싶습니다.
            <br />
          </Typography>
        </Paper>
      </div>
      <div className="projectTitle">
        <Typography variant="h4">
          <strong>PROJECT</strong>
        </Typography>
      </div>
      <div className="ProjectCell2">
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
            link={"https://github.com/woqls22/OSS_Project/raw/master/src/1.JPG"}
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
      <div className="ProjectCell2">
        <div className="ProjectPaper" style={{marginTop:"-2rem"}}>
          <ProjectCard
            link={
             "https://blog.kakaocdn.net/dn/usdZM/btq2xb5TnPA/mz7kj58IANNsq2oF92kkz0/img.png"
            }
            number={1}
            projectTitle={"Meta Management 개발"}
            period={"2021.04.01~2021.07.01"}
            stack={"TiberoDB, React.js, JAVA"}
            info={[
              "티맥스의 제품인 하이퍼데이터 내 MetaManagement모듈을 개발했습니다.",
              <br />,
              "React Flow Renderer를 기반으로 컬럼간관계에 대한 CRUD를 그래프형태로 구현하였으며, ",<br />,"DCAT표준에 맞춘 컬럼간 Categorization기능을 개발했습니다.",
              <br />,
              "또한 Tree구조를 도식화함과 동시에 사용자의 input에 따른 트리 만족조건을 자체적으로 판단할 수 있도록 로직을 작성하였습니다."
            ]}
            contribute={"기획, 연구, 개발"}
            githubLink={""}
          />
        </div>
      </div>
      <div className="ProjectCell3">
        <Typography variant="h4">
          <strong>AWARDS</strong>
        </Typography>
        <TableContainer
          style={{ maxWidth: "95%", height: "fit-content", marginTop: "1rem" }}
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

        <Typography style={{ marginTop: "3rem" }} variant="h4">
          <strong>STACKS</strong>
        </Typography>

        <div style={{ display: "flex" }}>
          <div className="ProjectPaper">
            <StackCard
              link={
                "https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-java-intermediate.jpg"
              }
              projectTitle={"JAVA"}
              period={"1년"}
              info={[
                "인터페이스, 추상클래스등의 개념을 이해하고 있으며, 자바 메모리구조를 이해하고 있습니다.",
                <br />,
                "스프링 프레임워크에서 JDBC, JPA를 통한 RDBMS기반의 웹개발(API시스템 개발)을 할 수 있습니다.",
              ]}
            />
          </div>
          <div className="ProjectPaper">
            <StackCard
              link={"http://kijepark.com/template/assets/svg/react.svg"}
              projectTitle={"React"}
              period={"1년"}
              info={[
                "MOBX 상태 관리를 하며 AXIOS를 사용하여 API 요청을 구현할 수 있습니다.",
                <br />,
                "대부분의 필요한 웹 컴포넌트를 개발할 수 있습니다.",
                <br />,
                "react-flow-renderer를 활용한 Flow 시각화 개발 경험이 있습니다.",
              ]}
            />
          </div>
          <div className="ProjectPaper">
            <StackCard
              link={
                "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9941A1385B99240D2E"
              }
              projectTitle={"Spring FrameWork"}
              period={"1년"}
              info={[
                "스프링 프레임워크의 구조에 대해 이해하고 있으며, JPA를 활용한 CRUD API를 개발할 수 있습니다.",
                <br />,
              ]}
            />
          </div>
          <div className="ProjectPaper">
            <StackCard
              link={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
              }
              projectTitle={"Python"}
              period={"3년"}
              info={[
                "파이썬의 문법과 다양한 자료구조들을 이해하고 있으며, 라이브러리에 대한 이해를 바탕으로 여러프로젝트를 진행할 수 있습니다.",
                <br />,
                "특히 OpenCV를 활용, 영상처리 관련 프로젝트를 다수 진행한 경험이 있습니다.",
              ]}
            />
          </div>
          <div className="ProjectPaper">
            <StackCard
              link={
                "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9954F3355BBF0F0724"
              }
              projectTitle={"Oracle"}
              period={"1년"}
              info={[
                "DB 정규화, 인덱싱등의 기초 개념을 이해하고 있으며 RDB스키마를 설계할 수 있습니다.",
                <br />,
                "쿼리를 사용하여 스키마를 직접 구현하며, JPA,JDBC를 연동하여 객체지향적 API를 개발 할 수 있습니다.",
              ]}
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "6rem" }}>
          <div className="ProjectPaper">
            <StackCard
              link={
                "https://cdn.slidesharecdn.com/ss_thumbnails/15431-151208171634-lva1-app6891-thumbnail-4.jpg?cb=1449595199"
              }
              projectTitle={"ARX"}
              period={"1년"}
              info={[
                "개인정보 비식별 조치 오픈소스인 ARX를 활용할 수 있습니다.",
                <br />,
                "속성정보에 따른 레코드 취약성을 검증할 수 있으며, 준식별자 조합에 대한 위험도를 측정하고 최적 솔루션을 제공할 수 있습니다.",
              ]}
            />
          </div>
          <div className="ProjectPaper">
            <StackCard
              link={"https://t1.daumcdn.net/cfile/tistory/999399465F5084760F"}
              projectTitle={"JavaScript"}
              period={"1년"}
              info={[
                "ES6문법에 대해 이해하고 있으며 Promise객체에 대한 이해를 바탕으로 비동기 콜백문제를 해결할 수 있습니다",
                <br />,
                "",
              ]}
            />
          </div>
          <div className="ProjectPaper">
            <StackCard
              link={
                "https://blog.kakaocdn.net/dn/6jJIy/btqD1qtPjLY/D0M6XwD68qoqr4ckIixb5k/img.png"
              }
              projectTitle={"Elastic Search"}
              period={"1년"}
              info={[
                "Elastic Search의 Inverted Index Based 동작원리를 이해하고 있으며 RDBMS와의 차이점을 이해하고있습니다.",
                <br />,
                "Elastic Search를 기반으로 Json기반의 쿼리 조회 API를 작성할 수 있습니다.",
              ]}
            />
          </div>
        </div>
        <Typography style={{ marginTop: "10.5rem" }} variant="h4">
          <strong>DOCUMENT</strong>
        </Typography>
        <div>
          <DocumentSlider />
        </div>
      </div>
    </>
  );
}

export default App;
