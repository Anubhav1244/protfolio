import React from "react";
import eventKan from "../assets/img/event-kan.jpg";
import hackathon from "../assets/img/web.avif";
import webdevlopment from "../assets/img/web.avif";
import Carousel from "react-multi-carousel";
export default function Events() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
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

  return (
    <section className="events md-5 " id="events">
      <h2 className="text-center grad-css">Events</h2>
      <div className="container  text-center">
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme skill-slider text-center md-5 "
        >
           <div className="item container">
            <img src={hackathon} alt="could not load" id="event-img" />
            <h3>Tecathon 2024</h3>
            <h7>
             Mentor and member of reviewing panel in a hackathon <br />{" "}
              conducted by CSE Dept and Embrione{" "}
            </h7>
          </div>
          <div className="item container">
            <img src={webdevlopment} alt="could not load" id="event-img" />
            <h3>Web Development Workshop</h3>
            <h7>
            Organized and led sessions specifically focused on Express.js, a popular Node.js framework. Covered key 
            concepts such as  routing, middleware, REST  APIs, and database integration{" "}
            </h7>
          </div>
          
        </Carousel>
      </div>
    </section>
  );
}
