import React, { Component } from "react";
import "../../styles/style.scss";
import { Col, Container, Row } from "react-bootstrap";
import Objects from "../../constants/Objects";

export default class Header extends Component {
  render() {
    return (
      <section className="header">
        <Container>
          <Row>
            <Col>
              <span>{Objects.logoCopart}</span>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
