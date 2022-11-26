import React from 'react'
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='bg-black text-white d-flex justify-content-around align-items-center py-3'>
            {/* <p className='text-white'>&#169; 2001 - 2022 Blogger | All Rights Reserved</p> */}
            <div className=' fs-4 d-flex gap-4'>
                <BsInstagram />
                <BsTwitter />
                <BsLinkedin />
                <BsFacebook />
            </div>
            <p className=''> {"</>"} Andrick Silva</p>
        </div>
    )
}

export default Footer
