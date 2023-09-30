import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Jamal </span>
            from <span className="purple"> EL Jadida, Morocco.</span>
            <br/>
            <br /> I am a final year student pursuing an Computer Science and Technology Master Degree at the
            Shanghai University of Electric Power 上海电力大学.
            <br />
            Additionally, I am currently employed as a IT Manager at
            Gulf Model School Dubai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning Languages
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading About New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jamal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
