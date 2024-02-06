




// import { Component } from "react";

// import style from '../About/About.module.css'

// import abed from '../../Assets/Images/moo.jpeg'

// export default class About extends Component {

//     state= {
//         count : 0
//     }

    
//     render(){
//         return <>
//             <h2 className={`${style.test} ${style.center} h1`}>About Component</h2>
//             <img src={abed} alt="" className="w-25" />
//         </> 
//     }
// }


// import style from '../About/About.module.css';
// import abed from '../../Assets/Images/moo.jpeg';

// export default function About() {
//     return <>
//         <h2 className={`${style.test} ${style.center} h1`}>About Component</h2>
//         <img src={abed} alt="" className="w-25" />
//     </>
// }


import React from 'react'

export default function About() {
  return <>
  <div className="about home_color py-5">
    <div className="container py-5">
      <div className="text-white d-flex justify-content-center align-items-center py-4">
        <div className="app-star">
          <div className="pt-4 text-center  text-white">
            <h2 className='mb-3 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className='fa-solid fa-star'></i>
            <div className="line ms-3 bg-white"></div>
          </div>
        </div>
      </div>
      <div className="text pt-4 text-white">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6 pe-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
  </>
}
