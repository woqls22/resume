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
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "./section1";
import Projects from "./Project";
import Awards from "./awards";
import Stacks from "./stacks";
import videobg1 from "../src/resources/Network.mp4";
import { Height } from "@material-ui/icons";
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
      {/* <div className="Navigation">
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
      </div> */}
      <ReactFullpage
        sectionsColor={[
          "rgb(0,0,0,0)",
          "#171616",
          "#171616",
          "#171616",
          "#171616",
        ]}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1" id="introduce">
                {/* <video  autoPlay={true} loop={true} muted={true} playsInline={true}>
              <source src={videobg1} type="video/mp4"/>
            </video> */}
                <Section1 />
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <Awards />
              </div>
              <div className="section">
                <Stacks />
              </div>
              <div className="section">
                <div>
                  <Typography
                    style={{
                      fontSize: "2.5rem",
                      textAlign: "left",
                      marginTop: "1rem",
                      marginLeft: "5.5rem",
                      color: "#FFFFFF",
                    }}
                    variant="h4"
                  >
                    <strong>D</strong>OCUMENT
                  </Typography>
                </div>
                <div>
                  <DocumentSlider />
                  <div style={{float:"right", marginRight:"10rem", marginLeft:"auto"}}>
                  <Button onClick={() => fullpageApi.moveTo(1, 0)}>
                  <Typography
                    style={{
                      fontSize: "2.5rem",
                      textAlign: "left",
                      marginTop: "1rem",
                      marginLeft: "5.5rem",
                      color: "#FFFFFF",
                    }}
                    variant="h4"
                  >
                    <strong>M</strong>ove{" "}Top
                  </Typography>
                </Button>
                  </div>
                  
                </div>
                
              </div>
            </div>
          );
        }}
      />
    </>
  );
  return (
    <>
      <div className="ProjectCell3"></div>
    </>
  );
}

export default App;
