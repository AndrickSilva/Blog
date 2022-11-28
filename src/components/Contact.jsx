import React from 'react'

const Contact = () => {
    return (
        <div className='container my-4 '>
            <form className='py-5'>
                <div className="d-flex gap-5">
                    <div className="mb-3 w-50">
                        <label htmfor="" className="form-label">Name</label>
                        <input type="text" className="rounded-0 form-control mb-3 shadow-none" style={{border: "2px solid #006B5F", backgroundColor: "#e9fffd"}} />
                    </div>
                    <div className="mb-3 w-50">
                        <label htmfor="" className="form-label">Email address</label>
                        <input type="email" className="rounded-0 form-control mb-3 shadow-none" style={{border: "2px solid #006B5F", backgroundColor: "#e9fffd"}}/>
                    </div>
                </div>
                <label htmlFor="">Message</label>
                <textarea className='form-control shadow-none' name="message" id="" cols="30" rows="9" style={{border: "2px solid #006B5F", backgroundColor: "#e9fffd", resize: "none"}}></textarea>
                <div className="d-flex justify-content-center"><button type='Submit' className='btn rounded-5 my-3 py-2 px-4 text-white mt-5 actions' style={{backgroundColor: "#006B5F"}}>Send message</button></div>
            </form>
        </div>
    )
}

export default Contact