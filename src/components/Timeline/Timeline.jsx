import React from 'react'
import "./Timeline.css";

function TimeLine() {
    return (

<div>
<div class="wrap">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Start of Registrations</span>
          <span>10th May 2023</span>
        </div>
        {/*<p className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        */}
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">End of Registrations</span>
          <span>10th June 2023</span>
        </div>
        {/*<p  className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
       */}
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Opening Ceremony</span>
          <span>13th June 2023</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon opening ceremony will start at 11:00 AM.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Hackathon Coding Starts</span>
          <span>13th June 2023</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon coding period will start from 12:00 PM onwards.</p>
       
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Mentoring Round</span>
          <span>13th June 2023</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Mentoring Round will start at 5:00 PM.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Semi-Final Evaluation Round</span>
          <span>14th June 2023</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Semi-Final Evaluation Round will start at 11:00 AM.</p>
        
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Hackathon Coding + Devfolio Submission Ends</span>
          <span>14th June 2023</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon coding period + Devfolio Submission will end at 12:30 PM.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Declaration of selected teams</span>
          <span>14th June 2023</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Declaration of teams selected for Final Presentation Round at 5:00 PM.</p>
        
      </section>
    </div>

    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Final Presentation Round</span>
          <span>15th June 2023</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Final Presentation Round of selected teams in Hybrid mode (Online from Home or Offline from GTBIT College) from 12:00 PM onwards.</p>
        
      </section>
    </div>

    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Hackathon + Meetup Ends</span>
          <span>15th June 2023</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon + Industry Expert Speaker Sessions will end at 4:00 PM.</p>
        
      </section>
    </div>
  </div>
         </div>
    );
  }
  
  export default TimeLine;