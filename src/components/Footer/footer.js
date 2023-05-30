import React, {useEffect, useState} from "react";
import "./footer.scss";
import logo from "../navbar/HACK_Unicorn_Logo-modified.png";
import huclogo from "../navbar/huc_logo.png";
import {SOCIALS, FOOTER} from "../../Module/General";

export default function Footer() {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <img src={logo} className="imgfooter" />
          <span class="logo_name">&nbsp;Hack Unicorn</span>
        </div>

        <div class="logo-details">
          
          <span class="logo_name">&nbsp;Hack Unicorn Club (HUC)</span>
        </div>
        
        <div class="media-icons">
          <a target="_blank" href={SOCIALS.instagram}><i class="iconlink fab fa-instagram"></i></a>
          <a target="_blank"href={SOCIALS.email}><i class="iconlink fa-solid fa-envelope"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box1 input-box1">
          <img src={huclogo} className="imgfooterhuc" />
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 Hack Unicorn</span>
        <span class="policy_terms">
          Made with ❤️ by Taranjot Singh
        </span>
      </div>
    </div>
  </footer>

    </div>
  );
}
