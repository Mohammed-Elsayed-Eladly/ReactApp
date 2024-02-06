
import React from 'react'

import person from '../../Assets/Images/avataaars (1).svg'

export default function Home() {
    return <>

    <section className='home_color p-5'>

    <div className='home_color text-center d-flex align-items-center justify-content-center p-4' >
        <div className="text-center text-white">
            <img src={person} alt="person1"/>

            <div className="app-star">
            <div className="pt-4 text-center  text-white">
                <h2 className='mb-3 fs-1 fw-bolder'>START FRAMEWORK</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="line me-3 bg-white"></div>
                <i className='fa-solid fa-star'></i>
                <div className="line ms-3 bg-white"></div>
            </div>
            <div>
            Graphic Artist - Web Designer - Illustrator
            </div>
        </div>
        </div>

    </div>
    </section>
    </>
}
