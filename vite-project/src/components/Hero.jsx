import React from 'react'
import { FaArrowRight} from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='container'>
            <h3 className='text-center fw-bolder fs-1 my-4' style={{ color: "#006B5F" }}>Blog</h3>

            <div className="gap-5 d-flex my-5 ">
                <div className="card-content d-flex flex-column">
                    <div className="fs-1 fw-bold">First featurette heading. <div className="text-secondary">It’ll blow your mind.</div></div>
                    <p className='fs-5 mt-4'>Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    
                    <Link to="/View" className='mt-3 text-decoration-none' style={{ color: "#006B5F" }}>Read more <FaArrowRight /></Link>
                </div>
                <img className='rounded-1' height="300px" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
            </div>

            <hr className='w-100 py-4' />

            <div className="gap-5 d-flex my-5 flex-row-reverse ">
                <div className="card-content d-flex flex-column">
                    <div className="fs-1 fw-bold">First featurette heading.<div className="text-secondary">It’ll It’ll blow your mind.</div> </div>
                    <p className='fs-5 mt-4'>Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    <Link to="/View" className='mt-3 text-decoration-none' style={{ color: "#006B5F" }}>Read more <FaArrowRight /></Link>

                </div>
                <img className='rounded-1' height="300px" src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <hr className='w-75 ' />

            <div className="gap-5 d-flex my-5 ">
                <div className="card-content d-flex flex-column">
                    <div className="fs-1 fw-bold">First featurette heading. <div className="text-secondary">It’ll blow your mind.</div></div>
                    <p className='fs-5 mt-4'>Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    <Link to="/View" className='mt-3 text-decoration-none' style={{ color: "#006B5F" }}>Read more <FaArrowRight /></Link>

                </div>
                <img className='rounded-1' height="300px" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
            </div>

            <hr className='w-100 py-4' />

            <div className="gap-5 d-flex my-5 flex-row-reverse ">
                <div className="card-content d-flex flex-column">
                    <div className="fs-1 fw-bold">First featurette heading.<div className="text-secondary">It’ll It’ll blow your mind.</div> </div>
                    <p className='fs-5 mt-4'>Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    <Link to="/View" className='mt-3 text-decoration-none' style={{ color: "#006B5F" }}>Read more <FaArrowRight /></Link>

                </div>
                <img className='rounded-1' height="300px" src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <hr className='w-75 ' />

        </div>
    )
}

export default Hero