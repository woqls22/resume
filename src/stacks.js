import "./App.css";
import React from "react";
import {

  Typography,

} from "@material-ui/core";
import StackCard from "./StackCard";

import ReactFullpage from "@fullpage/react-fullpage";
export default function Stacks(){
    return(   
    <>
    <Typography style={{fontSize:"2.5rem", textAlign:"left", marginTop:"1rem",marginLeft:"5.5rem", color:"#FFFFFF"}} variant="h4">
          <strong>S</strong>TACKS
        </Typography>
        <div style={{ display: "flex",  marginLeft:"5rem" }}>
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
              link={"https://miro.medium.com/max/2400/0*XCgoYU9sqt95P8J0.png"}
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
        <div style={{ display: "flex", marginTop: "3rem", marginLeft:"5rem" }}>
        {/* <div className="ProjectPaper">
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
          </div> */}
        </div>
    </>
    );
}