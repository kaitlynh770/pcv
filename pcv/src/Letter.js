import {useState} from 'react';
import peek from './assets/images/peekaboo.gif'
import pin from './assets/images/pin.gif'
import watching from './assets/images/watching.gif';
import breakWall from './assets/images/spongebob-wall.gif';
import './assets/scss/cover-letter.scss'
import table from './assets/images/table.gif';
import css from './assets/images/css.gif';
import multi from './assets/images/multi.gif';
import excited from './assets/images/patrick.gif';
import * as React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
function Letter(){
    const [peekOut, setPeekOut] = useState(false);
    function imageOut(){
        setPeekOut(true);

        setTimeout(() => {
            setPeekOut(false);
        }, 4800)
    }
    return (
        <div className="container" >
            <h1 className="title-header">
                Dear Pinterest: 
            </h1>
            <img src = {peek}
            style = 
            {{
                right: peekOut ? '0px' : '-350px',
                position: peekOut? 'absolute' : 'absolute',
                animation: peekOut ? 'slide-in-right 4800ms ease-in-out': 'none'
            }}/>
            <div className="container-letter">
                <p className ="letter-paragraph">
                    For as long as I remember, Pinterest has been my favorite social media platform to use. 
                    While others flocked to Instagram or swore by Tumblr I've always been a Pinterest girl deep down. 
                    Pinterest is <b>the</b> go-to platform for inspiration, no one does it like you guys. Anytime I'm
                    looking for something new to try or narrowing down an idea, I open your app and browse for hours (not literally...
                    <em>okay sometimes</em> ). The point is, I'm passionate about your product and would love 
                    the opportunity to work on something I've used so much in my life. With <Tippy theme={"light"} content = {<img className = "tippy-image" style = {{width: '15em',}} src = {pin} />} ><button className ='button-link'>pins</button></Tippy> being such a huge
                    part of your product, I hope you don't mind if I include a few of my own to showcase my personality. 
                    Hopefully it'll give a quick  <button id = "pin" className="button-link" onClick = {imageOut}>peek</button> 
                    into who I am.
                    <br />
                    <br />
                    Let me talk about my background really quickly. During my time earning a B.S in Creative Technology & Design
                    from University of Colorado Boulder, I've learned to love and appreciate the intersection between creativity 
                    and technology and I've always dreamed of working for a company who specializes in the intersection. 
                    This relationship is something that I feel is still severly underappreciated, but Pinterest has been way ahead 
                    of the game and I'd love to bring my own understanding and skillset to your company. I've been <Tippy theme = {"light"} content = {<img className = "tippy-image" style = {{width: '20em',}} src = {watching} />} ><button className = 'button-link'>stalking</button></Tippy> the careers page for a bit. When the New Grad position popped up on
                    yourCareers page, I've never clicked on something <Tippy theme = {"light"} content = {<img className = "tippy-image" style = {{width: '20em',}} src = {breakWall} />} ><button className = 'button-link'>faster</button></Tippy> 
                    in my life. As far as what I bring to the <Tippy theme = {"light"} content = {<img className = "tippy-image" style = {{width: '20em'}} src = {table} />} ><button className = 'button-link'>table</button></Tippy>, 
                    Creative Technology & Design has provided me with a <Tippy theme = {"light"} content = {<img className = "tippy-image" style = {{width: '22em',}} src = {multi} />} ><button className = 'button-link'>multitude</button></Tippy> of skills to use at my disposal. However, what I specialize in is <Tippy theme = {"light"} content = {<img className = "tippy-image" style = {{width: '20em',}} src = {css} />} ><button className = 'button-link'>front-end development.</button></Tippy> 
                    Throughout personal studies, jobs, and school I've built multiple applications and websites in trusty
                    React, gone back to my roots with good old HTML/CSS/Javascript and created mobile apps from the ground up in Xcode and
                    Android Studio. But if there's anything that my major has given me throughout the 4 years, it's the ability to adjust to new
                    environments and learn new skills on the fly. 
                    <br />    
                    <br />
                    Pinterest is a company that continues to exceed expectations and improve on their product each day, and being able to
                    be work on that would truly put my skills to the test. Just as I've been inspired by some of the things I've seen 
                    on Pinterest, I'd love to be a part of a team who's constantly inspiring millions across the world. I'm <Tippy theme = {"light"} content = {<img className = "tippy-image" style = {{width: '20em',}} src = {excited} />} ><button className = 'button-link'>excited</button></Tippy> to see
                    how you guys are going to grow in the future.
                    <br />
                    <br />
                    Best regards,
                    <br />
                    Kaitlyn Huynh
                </p>
            </div>
        </div>
    );
}
export default Letter;
