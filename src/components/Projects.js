import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/Procurement for Construction IndustrySystem.jpg";
import projImg4 from "../assets/img/facebook-quote-template-6.png";
import projImg5 from "../assets/img/waste managment.jpg";
import projImg6 from "../assets/img/woman-checking-her-delivery-groceries.jpg";
import projImg7 from "../assets/img/blog application er diagram.png";
import projImg8 from "../assets/img/flutter-firebase-todoapp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Southern Agro Serve (Pvt) Ltd",
      description: "Business management system for Southern Agro Serve (Pvt) Ltd",
      imgUrl: projImg1,
      projectURL: "https://github.com/SLIITITP/ITP_WE_B01_TW_14",
    },
    {
      title: "Blog Application - Spring Boot",
      description: "Features to add post to relvent category and manage post, add comment to post",
      imgUrl: projImg7,
      projectURL: "https://github.com/IT21307058/Blog-Application-SpringBoot-BackEnd",
    },
    {
      title: "EcoBin",
      description: "Mobile Application to waste managment",
      imgUrl: projImg5,
      projectURL: "https://github.com/IT21307058/EcoBin",
    },
    {
      title: "Procurement for Construction Industry System",
      description: "Manage Procurement for Construction Industry",
      imgUrl: projImg3,
      projectURL: "https://github.com/IT21307058/CSSE-PrimeConstruct",
    },
    {
      title: "CCMT",
      description: "Code complexity measuring tool",
      imgUrl: projImg4,
      projectURL: "https://github.com/IT21307058/CCMT-Server/tree/master",
    },
    {
      title: "Todo App-Flutter-Firebase",
      description: "Mobile Application to manage task",
      imgUrl: projImg8,
      projectURL: "https://github.com/IT21307058/Flutter-Firebase-TodoApp?tab=readme-ov-file",
    },
  ];

  const projects1 = [
    {
      title: "FinTrack",
      description: "Mobile Application to manage finances and track income and expenses",
      imgUrl: projImg2,
      projectURL: "https://github.com/IT21307058/FinTrack",
    },
    {
      title: "OneStop",
      description: "Online-Grocery-Ordering-System -Y2S1 Web Application Developed Using Java based technologies",
      imgUrl: projImg6,
      projectURL: "https://github.com/IT21307058/Online-Grocery-Ordering-System---Y2S1",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Discover a collection of innovative projects showcasing my expertise in developing custom solutions. From business management systems to mobile apps and web applications, each project embodies creativity and cutting-edge technology</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                </Tab.Pane>
                <Tab.Pane eventKey="third">Await for more projects...</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorSharp2"
      />
    </section>
  );
};

export default Projects;
