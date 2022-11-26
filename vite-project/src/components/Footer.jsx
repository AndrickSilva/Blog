import React from 'react'
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='bg-black d-flex justify-content-around align-items-center py-3'>
            {/* <p className='text-white'>&#169; 2001 - 2022 Blogger | All Rights Reserved</p> */}
            <div className=' fs-4 d-flex gap-4'>
                <a className='text-white' href="#"> <BsInstagram /></a>
                <a className='text-white' href="#"> <BsTwitter /></a>
                <a className='text-white' href="#"> <BsLinkedin /></a>
                <a className='text-white' href="#"> <BsFacebook /></a>
            </div>
            <p className='mb-0 fw-bold text-white'> {"</>"} by Andrick Silva </p>
        </div>
    )
}

export default Footer
