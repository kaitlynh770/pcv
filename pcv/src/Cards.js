import {useState} from 'react';
import './assets/scss/cover-letter.scss'
import * as React from 'react';
import profile from './assets/images/prof-image.png'


function Cards(){
    return(
        <div className='container-cards'>
            <div className='card'>
                <img className= 'card-image' src = {profile} style = {{width: '300px'}} />
                <p className='text-for-card'> 
                    Kaitlyn's values
                </p>
                <img className= 'profile-image-card' src = {profile}/>
                <p className='text-next-to-photo'>Uploaded by kaitlyn</p>
            </div>
            <div className='card'>
                <img className= 'card-image' src = {profile} style = {{width: '300px'}}></img>
            </div>
            <div className='card'>
                <img className= 'card-image' src = {profile} style = {{width: '300px'}}></img>
            </div>
        </div>
    )
}
export default Cards;