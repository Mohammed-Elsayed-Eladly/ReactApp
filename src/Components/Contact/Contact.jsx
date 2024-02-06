import React from 'react'


export default function Contact() {
  return <>
  <div className="container pt-3">

    <div className="app-star">
          <div className="pt-4 text-center">
            <h2 className='mb-3 fs-1 fw-bolder text_color'>CONTACT SECTION</h2>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3 main_color"></div>
            <i className='fa-solid fa-star'></i>
            <div className="line ms-3 main_color"></div>
          </div>
    </div>

    <form action="" className='w-50 p-3 mx-auto mt-5'>
      <label htmlFor="userName" className='position-relative top-0 '>userName : </label>
      <input id='userName' type="text" placeholder='userName' name='userName' className='form-control border-0 border-bottom py-3 position-relative' />

      <label htmlFor="userAge" className='position-relative top-0 mt-4 '>userAge : </label>
      <input id='userAge' type="number" placeholder='userAge' name='userAge' className='form-control border-0 border-bottom py-3  position-relative' />

      <label htmlFor="userEmail" className='position-relative top-0 mt-4'>userEmail : </label>
      <input id='userEmail' type="email" placeholder='userEmail' name='userEmail' className='form-control border-0 border-bottom py-3 position-relative' />

      <label htmlFor="userPassword" className='position-relative top-0 mt-4'>userPassword : </label>
      <input id='userPassword' type="text" placeholder='userPassword' name='userPassword' className='form-control border-0 border-bottom py-3 position-relative' />

      <button className='btn mt-4 text-white home_color mb-3' > send Message </button>



    </form>

  </div>
  </>
}
