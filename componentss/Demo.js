import React from 'react';
import './Demo.css';

const Demo = () => {
  return (
     <div className='demo' id='demo'>
        <div className='container'>
        <div className='col-1'>
        <p>more than 100 programmers</p>
        <p>attend to our world and change to what you want</p>
        <button className='button'>GIT YOUR OFFER</button>
        </div>
        <div className='col-2'>
        <iframe width= '570' height='320' src='https://www.youtube.com/watch?v=4UZrsTqkcW4' title='youtube video player'></iframe>
        </div>
        </div>
     </div>
  )
}

export default Demo