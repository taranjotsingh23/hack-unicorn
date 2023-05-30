import React from "react";
import "./sponsors.scss";

function SponsorsHead() {
  return (
    <div>
      <h1 className="shead">Sponsors & Partners</h1>
    </div>
  );
}

function Sponsor(props) {
  return (
    <div className="Sponsor">
     <a href={props.link} rel="noreferrer" target="_blank"> <img src={props.srcx} alt="DUHacks"></img></a>
    </div>
  );
}

export {SponsorsHead, Sponsor};
