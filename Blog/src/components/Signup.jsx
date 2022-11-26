import React from 'react'
import login from '../assets/login.svg'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className=' py-4 d-flex justify-content-center align-items-center' style={{ minHeight: "80vh" }}>
            <form style={{ backgroundColor: "antiquewhite" }}>

                <div className="d-flex justify-content-between p-5 rounded-3">
                    <div className="form-content" style={{ width: "22em" }}>
                        <div className="mb-3">
                            <label htmfor="" className="form-label">Name</label>
                            <input type="text" className="rounded-0 form-control mb-3" id="" />
                        </div>
                        <div className="mb-3">
                            <label htmfor="" className="form-label">Email address</label>
                            <input type="email" className="rounded-0 form-control mb-3" id="" />
                        </div>
                        <div className="mb-3">
                            <label htmfor="" className="form-label">Password</label>
                            <input type="password" className="rounded-0 form-control mb-3" id="" />
                        </div>
                        <div className="mb-3">
                            <label htmfor="" className="form-label">Re-enter Password</label>
                            <input type="password" className="rounded-0 form-control mb-3" id="" />
                        </div>
                        <button type="submit" className="btn btn-primary rounded-0 border-0 mt-4" style={{ backgroundColor: "#f7a60f" }}>Submit</button>
                        <p className='mt-5'>Already have an account ?<Link to="/Login" style={{ color: "#f7a60f" }}> Login</Link> </p>
                    </div>
                    <img src={login} alt="Login" height="400px" />
                </div>
            </form>
        </div>
    )
}

export default Signup