import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";

import TrackVisibility from "react-on-screen";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
export default function Experience() {
  return (
    <>
      <section className="experience" id="experience">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated " : ""}>
                    <h2 className="text-center  grad-css">Experience</h2>
                    <h5 className="text-center mb-5">
                      My Qualifications & Experience
                    </h5>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills  justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">
                            <span className="nav-text"> Education</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">
                            {" "}
                            <span className="nav-text"> Volunteering</span>{" "}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={isVisible ? "animate__animated " : ""}
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            <section>
                              <MDBContainer fluid className="py-5 ">
                                <div className="main-timeline-2">
                                  <div className="timeline-2 left-2">
                                    <MDBCard className="text-center" id="exp">
                                      <MDBCardBody className="p-4">
                                        <h4 className="fw-bold mb-2 ">
                                          B.E, CSE
                                        </h4>

                                        <span class=" fw-bold ">
                                          RNS Institute Of Technology, Bangalore
                                        </span>
                                        <div class="qualification_calendar">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-calendar-event-fill text-info m-2"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                          </svg>
                                          2021 - Present
                                        </div>
                                      </MDBCardBody>
                                    </MDBCard>
                                  </div>
                                  <div className="timeline-2 right-2">
                                    <MDBCard className="text-center" id="exp">
                                      <MDBCardBody className="p-4">
                                        <h4 className="fw-bold mb-4">
                                          12th Grade
                                        </h4>

                                        <span class="qualification_subtitle">
                                         Jawahar Navodaya Vidyalaya,
                                          Munger
                                        </span>
                                        <div class="qualification_calendar">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-calendar-event-fill text-info m-2"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                          </svg>
                                          2020 - 2021
                                        </div>
                                      </MDBCardBody>
                                    </MDBCard>
                                  </div>
                                  <div className="timeline-2 left-2">
                                    <MDBCard className="text-center" id="exp">
                                      <MDBCardBody className="p-4">
                                        <h4 className="fw-bold mb-4 ">
                                         11th Grade
                                        </h4>
                                        <span class="qualification_subtitle">
                                        Jawahar Navodaya Vidyalaya,
                                          Munger
                                        </span>
                                        <div class="qualification_calendar">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-calendar-event-fill text-info m-2"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                          </svg>
                                          2019 - 2020
                                        </div>
                                      </MDBCardBody>
                                    </MDBCard>
                                  </div>
                                  <div className="timeline-2 right-2">
                                    <MDBCard className="text-center" id="exp">
                                      <MDBCardBody className="p-4">
                                        <h4 className="fw-bold mb-4">
                                          10th Grade
                                        </h4>

                                        <span class="qualification_subtitle">
                                        Jawahar Navodaya Vidyalaya,
                                        Munger
                                        </span>
                                        <div class="qualification_calendar">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-calendar-event-fill text-info m-2"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                          </svg>
                                          2014 - 2019
                                        </div>
                                      </MDBCardBody>
                                    </MDBCard>
                                  </div>
                                </div>
                              </MDBContainer>
                            </section>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <div className="main-timeline-2 mt-4">
                              <div className="timeline-2 left-2">
                                <MDBCard className="text-center" id="exp">
                                  <MDBCardBody className="p-4">
                                    <h4 className="fw-bold mb-2 ">HUBX</h4>

                                    <span class=" fw-bold ">
                                      Full Stack Web Developer
                                    </span>
                                    <div className="container text-start">
                                      <ul>
                                        <li> Developed and maintained both front-end and back-end components of the web applications</li>
                                        <li> Worked with server-side technologies like Node.js, Express, and databases such as MongoDB</li>
                                        <li>Developed features specific to financial technology, such as payment processing, transaction management </li>
                                        <li>implemented CRM (Customer Relationship Management) system features to improve customer interactions</li>
                                        

                                      </ul>
                                    </div>
                                    <div class="qualification_calendar">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-calendar-event-fill text-info m-2"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                      </svg>
                                      March 2024 - Present
                                    </div>
                                  </MDBCardBody>
                                  
                                </MDBCard>
                               
                              </div>
                             
                             
                           
                        
                            </div>
                        </Tab.Pane>
                        
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
