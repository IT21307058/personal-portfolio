import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/user-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon4.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row align-items-end">
          <Col sm={5}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={7} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bhanuka-lakshitha-a31926215/">
                <img src={navIcon1} />
              </a>
              <a href="https://www.facebook.com/bhanukalakshitha.dayananda/">
                <img src={navIcon2} />
              </a>
              <a href="https://github.com/IT21307058">
                <img src={navIcon3} />
              </a>
            </div>
            <p>&copy; 2023 Bhanuka Lakshitha Dayananda. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
