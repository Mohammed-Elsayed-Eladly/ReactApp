import React from 'react'

import img1 from '../../Assets/Images/poert1.png'
import img2 from '../../Assets/Images/port2.png'
import img3 from '../../Assets/Images/port3.png'

export default function Portfolio() {
  return <>

  <div className="container pt-3 py-5">
    <div className="app-star">
            <div className="pt-4 text-center">
              <h2 className='mb-3 fs-1 fw-bolder text_color'>PORTFOLIO COMPONENT</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="line me-3 main_color"></div>
              <i className='fa-solid fa-star'></i>
              <div className="line ms-3 main_color"></div>
            </div>
    </div>
    <div className="row g-5">
      <div className="col-md-4">
        <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample">
          <img src={img1} alt="" />
            <div className='modal fade' id='imageExample' tobIndex = "-1"  aria-hidden = "true">
              <div className='modal-dialog '>
                <div className="modal-content ">
                    <div className="modal-body d-flex justify-content-center align-items-center">
                      <img src= {img1} alt="" />
                    </div>
                </div>
              </div>
            </div>
          <div className="layer">
            <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample2">
          <img src={img2} alt="" />
            <div className='modal fade' id='imageExample2' tobIndex = "-1"  aria-hidden = "true">
              <div className='modal-dialog '>
                <div className="modal-content ">
                    <div className="modal-body d-flex justify-content-center align-items-center">
                      <img src= {img2} alt="" />
                    </div>
                </div>
              </div>
            </div>
          <div className="layer">
            <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample3">
          <img src={img3} alt="" />
            <div className='modal fade' id='imageExample3' tobIndex = "-1"  aria-hidden = "true">
              <div className='modal-dialog '>
                <div className="modal-content ">
                    <div className="modal-body d-flex justify-content-center align-items-center">
                      <img src= {img3} alt="" />
                    </div>
                </div>
              </div>
            </div>
          <div className="layer">
            <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample">
          <img src={img1} alt="" />
            <div className='modal fade' id='imageExample' tobIndex = "-1"  aria-hidden = "true">
              <div className='modal-dialog '>
                <div className="modal-content ">
                    <div className="modal-body d-flex justify-content-center align-items-center">
                      <img src= {img1} alt="" />
                    </div>
                </div>
              </div>
            </div>
          <div className="layer">
            <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample2">
          <img src={img2} alt="" />
            <div className='modal fade' id='imageExample2' tobIndex = "-1"  aria-hidden = "true">
              <div className='modal-dialog '>
                <div className="modal-content ">
                    <div className="modal-body d-flex justify-content-center align-items-center">
                      <img src= {img2} alt="" />
                    </div>
                </div>
              </div>
            </div>
          <div className="layer">
            <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample3">
          <img src={img3} alt="" />
            <div className='modal fade' id='imageExample3' tobIndex = "-1"  aria-hidden = "true">
              <div className='modal-dialog '>
                <div className="modal-content ">
                    <div className="modal-body d-flex justify-content-center align-items-center">
                      <img src= {img3} alt="" />
                    </div>
                </div>
              </div>
            </div>
          <div className="layer">
            <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  </>
}
