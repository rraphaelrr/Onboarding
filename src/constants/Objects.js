import React from "react";
import "../styles/style.scss";
import { Image } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logoCopart: (
    <Image src={require("../assets/img/copart-logo.png")} className="logo" />
  ),
  maskDocFront: (
    <Image
      src={require("../assets/img/maskDocFront.png").default}
      className="maskDocFront"
    />
  ),
};
