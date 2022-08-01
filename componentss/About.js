import React from 'react';

import './About.css';

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='container'>
           <img className='image' src='https://www.reuters.com/resizer/kcCXW_q4sEBalnsBaxaukvFOv-Q=/1762x2203/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MRCNAHLGNJLUBBQBFASMKXER3A.jpg'/>
           <div className='col-2'>
            <h2>about</h2>
            <span className='line'>
                
            </span>
            <p></p>
                <p>Apple was founded as Apple Computer Company on April 1, 1976, by Steve Jobs, Steve Wozniak and Ronald Wayne to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977 and the company's next computer, the Apple II, became a best seller. Apple went public in 1980, to instant financial success. The company developed computers featuring innovative graphical user interfaces, including the original Macintosh, announced in a critically acclaimed advertisement, "1984", directed by Ridley Scott. By 1985, the high cost of its products and power struggles between executives caused problems. Wozniak stepped back from Apple amicably and pursued other ventures, while Jobs resigned bitterly and founded NeXT, taking some Apple employees with him.</p>
                <button className='button'>EXPLORE MORE</button>
           </div>
        </div>
    </div>
  )
}

export default About