import React from 'react'

const SignUp = () => {
  return (
    <>
    
        <div className="row gap-0 rounded-4 p-4" style={{backgroundColor:"rgb(245,237,223)"}}>
            <div className="col-12 col-md-6">
                <h2 className="fw-bold">
                    Deals, Inspiration and Trends
                </h2>
                <p className="mt-2">
                    Sign up for emails to learn more about special offers, promotions, events and more.
                </p>
            
            </div>
            <div className="col-12 col-md-6">
                <form action="#">
                    <input type="email" name="email" placeholder='Enter Your Email' className="form-control p-2 px-3" />
                    <button type="submit" className="btn btn-primary mt-2 px-3 ">Sign Up</button>
                    </form>
            
            </div>

        </div>
              
    </>
  )
}

export default SignUp
