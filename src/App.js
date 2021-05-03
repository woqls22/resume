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
import MobileFirst from"./MobileFirst";
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
  const anchors = ["Summary", "Projects", "Stacks", "Awards", "Document"];
  return (
    <>
      {console.log(window.innerWidth)}
      {window.innerWidth > 500 ? (
        <>
          <ReactFullpage
            sectionsColor={[
              "rgb(0,0,0,0)",
              "#171616",
              "#171616",
              "#171616",
              "#171616",
            ]}
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            render={({ state, fullpageApi }) => {
              return (
                <div
                  id="fullpage-wrapper"
                  style={{ backgroundColor: "#171616" }}
                >
                  <div className="section section1" id="introduce">
                    {/* <video  autoPlay={true} loop={true} muted={true} playsInline={true}>
              <source src={videobg1} type="video/mp4"/>
            </video> */}
                    <Section1 />
                  </div>
                  <div
                    className="section"
                    style={{ width: "98%", display: "flex" }}
                  >
                    <Projects />
                  </div>
                  <div className="section">
                    <Stacks />
                  </div>
                  <div className="section">
                    <Awards />
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
                      <div
                        style={{
                          float: "right",
                          marginRight: "10rem",
                          marginLeft: "auto",
                        }}
                      >
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
                            <strong>M</strong>ove Top
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
      ) : (
        <>
          <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
            onLeave={(origin, destination, direction) => {
              console.log("onLeave event", { origin, destination, direction });
            }}
            render={({ state, fullpageApi }) => {
              console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
              return (
                <div>
                  <MobileFirst/>
                  <div className="section" style={{ color: "#FFFFFF" }}>
                    <h3>개발자 이재빈 입니다.</h3>
                  </div>
                  <div className="section" style={{ color: "#FFFFFF" }}>
                    <h3>개발자 이재빈 입니다.</h3>
                  </div>
                </div>
              );
            }}
          />
        </>
      )}
    </>
  );
}

export default App;
