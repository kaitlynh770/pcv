import { useState, useCallback } from "react";
import peek from "./assets/images/peekaboo.gif";
import watching from "./assets/images/watching.gif";
import breakWall from "./assets/images/spongebob-wall.gif";
import "./assets/scss/cover-letter.scss";
import table from "./assets/images/table.gif";
import css from "./assets/images/css.gif";
import multi from "./assets/images/multi.gif";
import excited from "./assets/images/patrick.gif";
import github from "./assets/images/red-github.png";
import hat from './assets/images/hat.gif';
import creative from './assets/images/creative_bran.gif';
import technology from './assets/images/we_have_technology.gif';
import * as React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
function Letter() {
  const [peekOut, setPeekOut] = useState(false);
  const imageOut = useCallback(() => {
    setPeekOut(true);

    setTimeout(() => {
      setPeekOut(false);
    }, 4800);
  }, []);
  return (
    <div className="container">
      <h1 className="title-header">Dear Pinterest:</h1>
      <img src={peek} className={peekOut ? "photo-in" : "photo-out"} alt="girl peeking out" />
      <div className="container-letter">
        <p className="letter-paragraph">
          For as long as I remember, Pinterest has been my favorite social media platform to use. While others flocked
          to Instagram or swore by Tumblr I've always been a Pinterest girl deep down. Pinterest is <b>the</b> go-to
          platform for inspiration, no one does it like you guys. Anytime I'm looking for something new to try or
          narrowing down an idea, I open your app and browse for hours (not literally...
          <em>okay sometimes</em> ). The point is, I'm passionate about your product and would love the opportunity to
          work on something I've used so much in my life. With pins being such a huge part of your product, I hope you
          don't mind if I include a few of my own to showcase my personality. Hopefully it'll give a quick{" "}
          <button id="pin" className="button-link" onClick={imageOut}>
            peek
          </button>{" "}
          into who I am.
        </p>
        <p className="letter-paragraph">
          Let me talk about my background really quickly. During my time earning a B.S in Creative Technology & Design
          from University of Colorado Boulder, I've learned to love and appreciate the intersection between{" "}
          <Tippy
            theme = {"light"}
            content = {<img className = "tippy-image" src = {creative} alt = "creative bran" />}
          >
            <button className = "button-link">creativity</button>
          </Tippy> {" "}
          and {" "}
          <Tippy 
            theme = {"light"} 
            content = {
            <img className = "tippy-image" 
              src = {technology} 
              alt = "we aren't cavemen, we have technology" />}
            > 
              <button className = "button-link">technology</button>
          </Tippy>{" "} 
          and I've always dreamed of working for a company who specializes in the intersection. This
          relationship is something that I feel is still severly underappreciated, but Pinterest has been way ahead of
          the game and I'd love to bring my own understanding and skillset to your company. I've been{" "}
          <Tippy
            theme={"light"}
            content={<img className="tippy-image" src={watching} alt="woman watching through binoculars" />}
          >
            <button className="button-link">stalking</button>
          </Tippy>{" "}
          the careers page for a bit. When the SWE Web Position popped up on your Careers page, I've never clicked on
          something{" "}
          <Tippy
            theme={"light"}
            content={<img className="tippy-image" src={breakWall} alt="spongebob breaking through wall" />}
          >
            <button className="button-link">faster</button>
          </Tippy>{" "}
          in my life. As far as what I bring to the{" "}
          <Tippy
            theme={"light"}
            content={<img className="tippy-image" src={table} alt="man flipping chair to table" />}
          >
            <button className="button-link">table</button>
          </Tippy>
          , Creative Technology & Design has provided me with a{" "}
          <Tippy theme={"light"} content={<img className="tippy-image" src={multi} alt="spongebob multitasking" />}>
            <button className="button-link">multitude</button>
          </Tippy>{" "}
          of skills to use at my disposal. However, what I specialize in is{" "}
          <Tippy theme={"light"} content={<img className="tippy-image" src={css} alt="struggling with css" />}>
            <button className="button-link">front-end development.</button>
          </Tippy>
          Throughout my studies and professional experience, I’ve built and shipped applications across the stack—from 
          developing web apps in React and working directly with HTML, CSS, and JavaScript, to building mobile applications 
          from the ground up in Xcode and Android Studio. In my current role as a full-stack developer, I’ve contributed to 
          multiple projects wearing different {" "}
          <Tippy theme = {"light"} content = {<img className = "tippy-image" src = {hat} alt = "you deserve each other this hat and you" />}>
            <button className = "button-link">hats</button>
          </Tippy>{" "}
          including PMO and data analytics, and most recently helped develop the UI for an AI chatbot used in a government-facing application. 
          These experiences have strengthened my ability to quickly adapt to new environments, learn unfamiliar technologies on the fly, 
          and contribute meaningfully to complex projects. I’m excited to bring this versatility and problem-solving mindset to a collaborative 
          team where I can continue growing as an engineer.
        </p>
        <p className="letter-paragraph">
          Pinterest is a company that continues to exceed expectations and improve on their product each day, and being
          able to be work on that would truly put my skills to the test. Just as I've been inspired by some of the
          things I've seen on Pinterest, I'd love to be a part of a team who's constantly inspiring millions across the
          world. I'm{" "}
          <Tippy
            theme={"light"}
            content={<img className="tippy-image" src={excited} alt="patrick clapping his hands" />}
          >
            <button className="button-link">excited</button>
          </Tippy>{" "}
          to see how you guys are going to grow in the future.
        </p>
        <p className="letter-paragraph">
          Best regards,
          <br />
          Kaitlyn Huynh
        </p>
        <a href="https://github.com/kaitlynh770/pcv" target="_blank" rel="noopener noreferrer" >
          <img src={github} className="github-image" alt="red github icon" />
        </a>
      </div>
    </div>
  );
}
export default Letter;
