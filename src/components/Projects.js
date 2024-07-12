
import Carousel from "react-multi-carousel";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import speech from "../assets/img/speech.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import virtual_cal from "../assets/img/Educational-Websites-removebg-preview.png"
import password from "../assets/img/password.jpg"
import weather from "../assets/img/weather.jpg"
import "animate.css";


export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: speech,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <h2 className=" h2 grad-css">Projects</h2>
      <h4 className="h4 text-center">My Works</h4>
       <div className="container">
                            <Carousel
                              responsive={responsive}
                              infinite={true}
                              className="owl-carousel owl-theme  skill-slider "
                            >
                              
                              <div className="item text-center">
                                <div className="container ">
                                  <div className="proj-imgbx">
                                    <img
                                      src={virtual_cal}
                                      alt="Image"
                                      className="proj-image"
                                    />
                                    <div className="proj-txtx">
                                      <h3>EDUNXT</h3>
                                      <h5>2023</h5>
                                    </div>
                                    <h3>EDUNXT</h3>
                                  </div>
                                  <p>
                                    <span>Technologies:</span> <br /> <br />
                                    <img
                                      src="https://skillicons.dev/icons?i=vscode,express,react,redux,mongo,css,tailwind,javascript,html,ai&theme=dark&perline=7"
                                      alt="tech" style={{width:'40%'}}
                                    /> 
                                  </p>
                                  <a
                                    href="https://edunxt.vercel.app/"
                                    target="_blank"
                                    className="btn btn-info fw-bold fs-4 me-2"
                                  >
                                    View 
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-up-right  ms-2"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>

                              <div className="item text-center">
                                <div className="container ">
                                  <div className="proj-imgbx">
                                    <img
                                      src={password}
                                      alt="Image"
                                      className="proj-image"
                                    />
                                    <div className="proj-txtx">
                                      <h3>Password Generator</h3>
                                      <h5>2023</h5>
                                    </div>
                                    <h3>PASS_G</h3>
                                  </div>
                                  <p>
                                    <span>Technologies:</span> <br /> <br />
                                    <img
                                      src="https://skillicons.dev/icons?i=vscode,css,tailwind,javascript,html&theme=dark&perline=7"
                                      alt="tech" style={{width:'40%'}}
                                    /> 
                                  </p>
                                  <a
                                    href="https://anubhav1244.github.io/webprojects/"
                                    target="_blank"
                                    className="btn btn-info fw-bold fs-4 me-2"
                                  >
                                    View 
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-up-right  ms-2"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>

                              <div className="item text-center">
                                <div className="container ">
                                  <div className="proj-imgbx">
                                    <img
                                      src={weather}
                                      alt="Image"
                                      className="proj-image"
                                    />
                                    <div className="proj-txtx">
                                      <h3>Weather App</h3>
                                      <h5>2023</h5>
                                    </div>
                                    <h3>Weather App</h3>
                                  </div>
                                  <p>
                                    <span>Technologies:</span> <br /> <br />
                                    <img
                                      src="https://skillicons.dev/icons?i=vscode,css,tailwind,javascript,html&theme=dark&perline=7"
                                      alt="tech" style={{width:'40%'}}
                                    /> 
                                  </p>
                                  <a
                                    href="https://anubhav1244.github.io/weather_app/"
                                    target="_blank"
                                    className="btn btn-info fw-bold fs-4 me-2"
                                  >
                                    View 
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-up-right  ms-2"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              
                        
                          
                            </Carousel>
                          </div>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
