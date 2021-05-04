import React from "react";
import "./App.css";
import { Paper, Typography, Button } from "@material-ui/core";
import "fullpage.js/vendors/scrolloverflow";

import MobileDocumentSlider from "./MobileDocumentSlider";

export default function MobileLast() {
  return (
    <div
      className="section"
      style={{
        color: "#FFFFFF",
        textAlign: "left top",
        paddingLeft: "1rem",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://cdn.shopify.com/s/files/1/0689/4173/products/diagonal_marble_3_wallpaper_square_web__21327.1559316435_1024x1024.jpg?v=1615776803")`,
        fontSize: "2.2rem",
      }}
    >
      <h3>Documents</h3>
      <div style={{ marginRight: "1rem", paddingBottom: "2rem", overflowX:"auto"}}>
      <MobileDocumentSlider />
      </div>
    </div>
  );
}
