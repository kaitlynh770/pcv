import {useState} from 'react';
import './assets/scss/cover-letter.scss'
import * as React from 'react';
import profile from './assets/images/prof-image.png'
import Letter from './Letter.js';
import Cards from './Cards.js';

function Profile() {
    const handleClick = (e) =>  {
        e.preventDefault();
    }
    const [showLetter,setShowLetter] = useState(true);
    function changeButton(){
        if(showLetter){
            setShowLetter(false)
        }
        else{
            setShowLetter(true);
        }
    }
    return(
        <div className = "container">
            <img className = "profile-image" src = {profile}></img>
            <h1>kaitlyn huynh</h1>
            <p className = "profile-info">@kaitlynhuynh8 · she/her</p>
            <a className = "click-me" href = 'https://creative.colorado.edu/~kahu1074/web/portfolio/'>Portfolio</a>
            <br />
            <button onClick = {changeButton} className={showLetter ? 'change-view-selected' : 'change-view' }>Letter</button>
            <button onClick = {changeButton} className={showLetter ? 'change-view' : 'change-view-selected'}>About Me</button>
            {showLetter && <Letter />}
            {!showLetter && <Cards />}
        </div>
    )
}
export default Profile;