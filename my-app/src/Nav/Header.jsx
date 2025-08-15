import React from 'react'

const Header = ({children }) => {
  return (
    <>
    <div className="container-fluid p-0">

   
        <div id="header" className="bg-info w-100 fixed-top z-3 " style={{height:"125px"}}>
            
       
            </div> 
            <div className="header-space" style={{minHeight:"125px"}}></div>

            {children}
    </div>
    </>
  )
}

export default Header
