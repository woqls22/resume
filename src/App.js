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
import DocumentSlider from "./DocumentSlider"
function App() {
  const scrollToSummary = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToProject = (event) => {
    window.scrollTo({
      top: 681,
      behavior: "smooth",
    });
  };
  const scrollToAwards = (event) => {
    window.scrollTo({
      top: 1370,
      behavior: "smooth",
    });
  };
  const scrollToStacks = (event) => {
    window.scrollTo({
      top: 1582,
      behavior: "smooth",
    });
  };
  const scrollToDocument = (event) => {
    window.scrollTo({
      top: 2349,
      behavior: "smooth",
    });
    console.log("move to 0,0");
  };
  
  return (
    <>
      <div className="Topbg">
        <div className="TopImg">
          <div className="TopTitle">
            개발자 &nbsp;<strong>이재빈</strong> 입니다
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
      {/* <div className="Summary">
        <strong>FullStack Developer</strong>
        <br />
        <strong>LeeJaeBeen</strong>
        <br />
        Email &nbsp; :&nbsp; woqls226@gmail.com <br />
        Phone &nbsp; :&nbsp; +82)01039041931 <br />
        Github &nbsp; :&nbsp; https://github.com/woqls22 <br />
      </div> */}
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
          <h3>Full Stack Developer</h3>
          <Typography variant="h6">
            <strong>LEE JAE BEEN</strong>
            <br />
          </Typography>
          <Typography variant="subtitle1">
            {" "}
            Email &nbsp; :&nbsp; woqls226@gmail.com &nbsp;
            <br />
          </Typography>
          <Typography variant="subtitle1">
            {" "}
            Phone &nbsp; :&nbsp; +82)01039041931 &nbsp;
            <br />
          </Typography>
          <Typography variant="subtitle1">
            {" "}
            Github &nbsp; :&nbsp; https://github.com/woqls22 &nbsp;
            <br />
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          style={{
            paddingRight: "5rem",
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
            &nbsp;NuRhyme Games 인턴십 진행(2020.06~2020.08)
            <br />
          </Typography>
          <Typography variant="button">
            &nbsp;경희대학교 KISES 공학교육 수료(2018.08)
            <br />
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          style={{
            paddingRight: "1rem",
            paddingLeft: "3rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h2>Introduce</h2>
          <Typography variant="button">
            요구사항 분석, 설계, 평가까지의 복잡한 프로세스를 거쳐 만든
            프로그램이 많은 사람들에게 큰 호응을 얻을 때,
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
              "data:image/jpeg;base64,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"
            }
            number={1}
            projectTitle={"개인정보 비식별 조치 모듈 개발"}
            period={"2020.12.28~2021.03.25"}
            stack={"ARX, SpringBoot, TiberoDB, React.js"}
            info={[
              "티맥스의 제품인 하이퍼데이터 내 비식별 조치 모듈의 기획 및 연구개발을 진행했습니다.",
              <br />,
              <br />,
              "ARX 오픈소스를 활용하여 비식별 조치 결과에 대해서 위험도 분석 기능을 개발했습니다.",<br />,<br />,
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
              " 백엔드 모듈, 뉴스데이터 크롤링 모듈 작성, 모듈 통합, 클라우드 서버 임포트 작업을 진행했습니다. ",
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
            githubLink={
              "https://github.com/woqls22/Autonomus-Vehicle"
            }
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
                <br />,
                "스프링 프레임워크에서의 싱글톤패턴을 바탕으로 구조적 개발을 할 수 있습니다.",
              ]}
            />
          </div>
          <div className="ProjectPaper">
            <StackCard
              link={"http://kijepark.com/template/assets/svg/react.svg"}
              projectTitle={"React"}
              period={"1년"}
              info={[
                "MOBX 상태 관리를 하며 AXIOS를 주로 사용하여 API 요청을 구현할 수 있습니다.",
                <br />,
                "대부분의 필요한 웹 컴포넌트를 개발할 수 있으며, 시각화 라이브러리 사용경험이 있습니다.",
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
                "https://lh3.googleusercontent.com/proxy/1McnDatPhzwgym5qaMICWFqyw-_zdUTKLGPm9R8Z9gBtr3t1cWD-_9MQ35PhbvfiYKaQPneYWSyzCZbO_1UEpXGBJFhiT1GaqhM09TrcWyW266kKRxcGj25ZtaBZBJhx0mUjgEVTBkyD7HAFE230wgfYFyrGCyEyHw0r6vHLWg"
              }
              projectTitle={"Oracle"}
              period={"1년"}
              info={[
                "관계형 데이터베이스 모델을 설계하고 구축할 수 있습니다. ",
                <br />,
                "데이터베이스에서 발생하는 여러 메타데이터를 다룰 수 있으며, 자바를 연동하여 API개발을 할 수 있습니다.",
              ]}
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop:"6rem" }}>
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
                <br />,
                "속성정보에 따른 레코드 취약성을 검증할 수 있으며, 준식별자 조합에 대한 위험도를 측정하고 최적 솔루션을 제공할 수 있습니다.",
              ]}
            />
          </div>
        </div>
        <Typography style={{ marginTop: "10.5rem" }} variant="h4">
          <strong>DOCUMENT</strong>
        </Typography>
        <div>
          <DocumentSlider/>
        </div>
      </div>
    </>
  );
}

export default App;
