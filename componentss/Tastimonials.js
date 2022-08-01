import React from 'react';
import './Tastimonials.css';

const Tastimonials = () => {
  return (
    <div className='tastimonials' id='tastimonials' >
        <div className='container'>
           <h2>Tastimonials</h2>
           <span className='line'></span>
           <div className='content'>
              <div className='card'>
                  <img src='https://static.vecteezy.com/system/resources/previews/001/196/475/non_2x/walk-person-png.png'></img>
                  <p></p>
                  <p><span>Mohammed imara</span></p>
                  <p>Work as UI/UX Disegner</p>
               </div>
               <div className='card'>
                  <img src='https://cdn.pixabay.com/photo/2017/10/04/13/14/man-2816200_640.png'></img>
                  <p></p>
                  <p><span>Abdullah imara</span></p>
                  <p>Work as Front-End web developer</p>
               </div>
               <div className='card'>
                  <img src='https://www.seekpng.com/png/detail/28-288141_free-png-people-sitting-silhouette-png-images-transparent.png'></img>
                  <p></p>
                  <p><span>Amr imara</span></p>
                  <p>Work as back-End web developer</p>
               </div>
               </div>
        </div>
    </div>
  )
}

export default Tastimonials