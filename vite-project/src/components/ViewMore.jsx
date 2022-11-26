import React from 'react'
import { FaRegPaperPlane, FaRegComment, FaRegHeart } from 'react-icons/fa';

const ViewMore = () => {
    return (
        <div className="container py-5 d-flex flex-column" style={{ color: "#006B5F" }}>
            <div className="fs-1 fw-bolder my-4 text-center ">First featurette heading. It’ll blow your mind.</div>
            <img className='rounded-1 align-self-center mb-2' height="500px" width="800px" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
            <div className="d-flex fs-3 gap-4 justify-content-center mb-5" >
                <a style={{color: "#006B5F"}} href="#"><FaRegHeart /></a>
                <a style={{color: "#006B5F"}} href="#"><FaRegComment /></a>
                <a style={{color: "#006B5F"}} href="#"><FaRegPaperPlane /></a>
            </div>
            <div className="container w-75 ">
                <h2 className='fw-bold my-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse!</h2>
                <p className='fw-light text-secondary text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis, odit soluta. Et libero voluptates, quam sed, quis veniam dolor dignissimos, totam iure suscipit magnam labore praesentium eos quod excepturi esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum deleniti, veniam maxime eligendi sint vel ipsam, quam repellat necessitatibus dolore iure omnis facilis rem soluta architecto vero unde esse.</p>
                <h2 className='fw-bold my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse!</h2>
                <p className='fw-light text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis, odit soluta. Et libero voluptates, quam sed, quis veniam dolor dignissimos, totam iure suscipit magnam labore praesentium eos quod excepturi esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum deleniti, veniam maxime eligendi sint vel ipsam, quam repellat necessitatibus dolore iure omnis facilis rem soluta architecto vero unde esse.</p>
                <h2 className='fw-bold my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse!</h2>
                <p className='fw-light text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis, odit soluta. Et libero voluptates, quam sed, quis veniam dolor dignissimos, totam iure suscipit magnam labore praesentium eos quod excepturi esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum deleniti, veniam maxime eligendi sint vel ipsam, quam repellat necessitatibus dolore iure omnis facilis rem soluta architecto vero unde esse.</p>
            </div>

        </div>

    )
}

export default ViewMore
