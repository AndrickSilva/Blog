import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegPaperPlane, FaRegComment, FaRegHeart } from 'react-icons/fa';

const ViewMore = () => {
    //Like
    const [like, setLike] = useState(0)
    const likeCount = () => {
        setLike(like + 1)
    }

    //Comment
    const addComment = () => {
        document.querySelector('#hide').classList.toggle("d-none")
    }

    //Share
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        alert("Link copied")
    }

    return (
        <div className="container py-5 d-flex flex-column" style={{ color: "#006B5F" }}>
            <div className="fs-1 fw-bolder my-4 text-center ">First featurette heading. It'll blow your mind.</div>

            <div className="shadow rounded-3 overflow-hidden d-flex flex-column align-self-center" style={{ width: "fit-content", backgroundColor: "#d4fffa" }}>
                <img className='rounded-0 align-self-center mb-2' height="500px" width="800px" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
                <div className="d-flex fs-3 gap-4 px-4 mb-2" >
                    <Link onClick={() => likeCount()} style={{ color: "#006B5F" }} ><FaRegHeart /></Link>
                    <Link onClick={() => addComment()} style={{ color: "#006B5F" }} ><FaRegComment /></Link>
                    <Link onClick={() => copyLink()} data-toggle="tooltip" data-placement="right" title="Click to copy" style={{ color: "#006B5F" }} ><FaRegPaperPlane /></Link>
                </div>
                <p className='px-4 fw-bold'>{like} Likes</p>
                <input id='hide' className='w-75 mx-3 mb-2 form-control fs-6 border-start-0 border-top-0 border-end-0 rounded-0 shadow-none d-none' style={{ borderBottom: "2px solid #3f978e" }} type="text" placeholder='Leave a comment !' />
                <p className='px-4 py-2'>View comment..</p> //Start here

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