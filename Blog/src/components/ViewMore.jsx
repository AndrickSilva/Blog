import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegPaperPlane, FaRegComment, FaRegHeart } from 'react-icons/fa';

const ViewMore = () => {
    //Like
    const [like, setLike] = useState(0)
    const likeCount = () => {
        setLike(like + 1)
    }

    //Add Comment
    const addComment = () => {
        document.querySelector('#hide').classList.toggle("d-none")
    }
    //View Comment
    const [view, setView] = useState("View")
    const viewComment = () => {
        document.querySelector('.comments').classList.toggle("d-none")
        setView(view == "Hide" ? "View" : "Hide")
    }

    //Share
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        alert("Link copied")
    }

    return (
        <>
            <div className="fs-1 fw-bolder my-4 pt-4 ps-5 " style={{ color: "#006B5F" }}>First featurette heading.<br/> It'll blow your mind.</div>
            <div className="my-5 p-5 d-flex gap-4 flex-row-reverse" style={{ color: "#006B5F" }}>

                <div className="shadow rounded-3 overflow-hidden d-flex flex-column align-self-start" style={{ width: "fit-content", backgroundColor: "#d4fffa" }}>
                    <img className='rounded-0 align-self-center mb-2' height="350px" width="500px" src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className="d-flex fs-3 gap-4 px-4 mb-2" >
                        <Link className="actions" onClick={() => likeCount()} style={{ color: "#006B5F" }} ><FaRegHeart /></Link>
                        <Link className="actions" onClick={() => addComment()} style={{ color: "#006B5F" }} ><FaRegComment /></Link>
                        <Link className="actions" onClick={() => copyLink()} data-toggle="tooltip" data-placement="right" title="Click to copy" style={{ color: "#006B5F" }} ><FaRegPaperPlane /></Link>
                    </div>
                    <p className='px-4 fw-bold'>{like} Likes</p>
                    <input id='hide' className='w-75 mx-3 mb-2 form-control fs-6 border-start-0 border-top-0 border-end-0 rounded-0 shadow-none d-none' style={{ borderBottom: "2px solid #3f978e" }} type="text" placeholder='Leave a comment !' />
                    <p onClick={() => viewComment()} className='px-4 py-2' style={{cursor: "pointer"}}> {view} comment..</p>

                    <div className="comments my-3 d-none" style={{ maxWidth: "fit-content" }}>
                        <div className=" ms-5 pe-4 d-flex align-items-start gap-3">
                            <img src="//github.com/CodeWithHarry.png" className="rounded-pill" alt="profile" height="40px"
                                style={{ aspectRatio: "1/1" }} />
                            <div className="text">
                                <h4 className="fs-6 fw-bold">Code with Harry </h4>
                                <p className='text-secondary'>And under those conditions, you cannot establish a capital-market evaluation of that
                                    enterprise. You can't get investors.
                                </p>
                            </div>
                        </div>
                        <div className=" mt-2 ms-5 pe-4 d-flex align-items-start gap-3">
                            <img src="//github.com/pexeixv.png" className="rounded-pill" alt="profile" height="40px"
                                style={{ aspectRatio: "1/1" }} />
                            <div className="text">
                                <h4 className="fs-6 fw-bold">Pex</h4>
                                <p className='text-secondary'>When you put money directly to a problem, it makes a good headline.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container w-75 align-self-start pe-5">
                    <h2 className='text-dark fw-bold mb-4 fs-4' style={{color: "#006B5F"}}>Dolor sit amet consectetur adipisicing elit. Odio, esse!</h2>
                    <p className='fw-light text-secondary'>Consectetur adipisicing elit. Odio, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis, odit soluta. Et libero voluptates, quam sed, quis veniam dolor dignissimos, totam iure suscipit magnam labore praesentium eos quod excepturi esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum deleniti, veniam maxime eligendi sint vel ipsam, quam repellat necessitatibus dolore iure omnis facilis rem soluta architecto vero unde esse.</p>
                    <h2 className='text-dark fw-bold mb-4 mt-5 fs-4' style={{color: "#006B5F"}}>Sit amet consectetur adipisicing elit. Odio, esse!</h2>
                    <p className='fw-light text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis, odit soluta. Et libero voluptates, quam sed, quis veniam dolor dignissimos, totam iure suscipit magnam labore praesentium eos quod excepturi esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum deleniti, veniam maxime eligendi sint vel ipsam, quam repellat necessitatibus dolore iure omnis facilis rem soluta architecto vero unde esse.</p>
                    <h2 className='text-dark fw-bold mb-4 mt-5 text-left fs-4' style={{color: "#006B5F"}}>Adipisicing elit Odio, esse!</h2>
                    <p className='fw-light text-secondary text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis, odit soluta. Et libero voluptates, quam sed, quis veniam dolor dignissimos, totam iure suscipit magnam labore praesentium eos quod excepturi esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum deleniti, veniam maxime eligendi sint vel ipsam, quam repellat necessitatibus dolore iure omnis facilis rem soluta architecto vero unde esse.</p>
                </div>

            </div>
        </>
    )
}

export default ViewMore
