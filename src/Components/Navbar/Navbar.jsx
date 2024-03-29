

import React from 'react'
import { Link, NavLink } from 'react-router-dom'


// export default function Navbar() {
//   return <>
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
//         <li className="nav-item">
//           <Link className="nav-link" to={'/'}>Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to={'about'}>About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to={'product'}>Product</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to={'movies'}>Movies</Link>
//         </li>
//       </ul>
      
//     </div>
//   </div>
// </nav>
//   </>
// }


// ==============================================================


export default function Navbar() {
  return <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid main_color ">
        <Link className="navbar-brand ps-5 text-white fw-bolder fs-2" to={'/'} >START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-4">
            <li className="nav-item me-3">
            <NavLink className="nav-link" activeclassname="active" to={'about'}>ABOUT</NavLink>
            </li>            
            <li className="nav-item me-3">
            <NavLink className="nav-link" to={'portfolio'}>PORTFOLIO</NavLink>
            </li>            
            <li className="nav-item me-3">
            <NavLink className="nav-link" to={'contact'}>CONTACT</NavLink>
            </li>            
        </ul>
        </div>
    </div>
  </nav>
  </>
}
