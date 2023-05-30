import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import { TOP_SECTION } from "../../Module/General";

function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="DUHacks"
      data-button-theme="light"
      style={{ height: "44px", width: "312px" }}
    ></div>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <br />
      <p className="shortjoin"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <br /><br />
      
      <div
        class="apply-button"
        data-hackathon-slug="hackunicorn"
        data-button-theme="light"
      ></div>
      &nbsp;&nbsp;
      <a
        href="https://chat.whatsapp.com/I3euQE9nKCq3YahI3168WS"
        rel="noreferrer"
        target="_blank"
      >
        <button class="dis-button">
           {<img src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png" style={{ height: "24px", width: "24px", color: "white" }}></img>}
        </button>
      </a>
      <br /><br /><br />
      <a href="https://hackunicorn.devfolio.co/" target="_blank"><button>Learn More</button></a>
    </div>


  );
}

export { Btn, Myinfo };
