import {useState} from 'react';
import './assets/scss/cover-letter.scss'
import * as React from 'react';
import profile from './assets/images/prof-image.png'
import highFive from './assets/images/high-five.gif';
import flowers from './assets/images/flowers.gif';
import puzzle from './assets/images/puzzle.gif';


function Cards(){
    return(
        <div className='container-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <div className = 'card-front'>
                        <img className= 'card-image' src = {highFive} style = {{width: '350px'}}/>
                        <p className='text-for-card'> 
                            Values
                        </p>
                        <img className= 'profile-image-card' src = {profile} />
                        <p className='text-next-to-photo'>Uploaded by kaitlyn</p>
                    </div>
                    <div className='card-back'>
                        <p className='text-for-card'>
                            "Hello there"
                        </p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <div className = 'card-front'>
                        <img className='card-image' src={flowers} style={{ width: '350px' }} />
                        <p className='text-for-card'>
                            Strengths
                        </p>
                        <img className='profile-image-card' src={profile} /><p className='text-next-to-photo'>Uploaded by kaitlyn</p>
                    </div>
                    <div className='card-back'>
                        <p className='text-for-card'>
                            "Hello there"
                        </p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <div className = 'card-front'>
                        <img className= 'card-image' src = {puzzle} style = {{width: '350px'}}/>
                        <p className='text-for-card'> 
                            What I'm looking for
                        </p>
                        <img className= 'profile-image-card' src = {profile} />
                        <p className='text-next-to-photo'>Uploaded by kaitlyn</p>
                    </div>
                    <div className='card-back'>
                        <p className='text-for-card'>
                            "Hello there"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;