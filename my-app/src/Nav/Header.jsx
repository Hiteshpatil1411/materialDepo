import React from 'react'

const Header = ({children }) => {
  const categories = [
  { id: 1, name: "Kitchen" },
  { id: 2, name: "Bedroom" },
  { id: 3, name: "Living Room" },
  { id: 4, name: "Bathroom" },
  { id: 5, name: "Dining" },
  { id: 6, name: "Outdoor" },
  { id: 7, name: "TV Unit" },
  { id: 8, name: "Wardrobe" },
];


  return (
    <>
    <div className="container-fluid p-0">

   
        <div id="header" className="bg-light shadow  w-100 fixed-top z-3 py-1" >
            <div className='d-flex px-4 py-1 justify-content-between align-content-center  nav gap-2'>
                <div className="nav-item brand-logo d-flex align-content-center justify-content-center">
                    <div className=" d-flex align-items-center ">
                        <img src="/navBar/logo.svg" alt="logo" srcset="" style={{objectFit:"cover"}}/>
                    </div>
                </div>
                <div className='nav-item d-flex align-content-center justify-content-center'>
                    <div className="d-flex align-content-center justify-content-center p-2">
                        <button className="btn text-dark d-flex flex-grow-1 align-items-center gap-2">
                            <i class="bi bi-geo-alt-fill"></i>
                            <div className="fw-bold text-center">
                                <div>Pune</div>
                                <div style={{borderBottom: "1px dotted #333"}}>421102</div>


                            </div>
                        </button>
                    </div>
                </div>

                <div className='nav-item d-flex align-items-center flex-grow-1 flex-shrink-1'>
                    <div className="d-flex align-items-center flex-grow-1 flex-shrink-1" >
                        <form className="d-flex  input-group border px-2 text-dark w-100 bg-white rounded "  role="search">
                              <button className="btn  input-group-text  bg-white border-0" id="basic-addon1" type="submit"><i class="bi bi-search"></i></button>
                              <input className="form-control border-0 " type="search" placeholder="Search For product" aria-label="Search"/>
                              <button className="btn  input-group-text  bg-white border-0" type="button"><i class="bi bi-camera"></i></button>
                            </form>
                    </div>
                    
                </div>
                <div className='nav-item mx-2 d-flex align-items-center justify-between gap-2'>
                    <a href="#" className='text-decoration-none' target="_blank" rel="noopener noreferrer">
                        <div className="d-flex align-items-center gap-1 text-dark">
                            <img src="/navBar/visit-store-icon.svg" alt="" />
                            <span>Visit Store</span>
                        </div>
                    </a>

                    
                    <div className='nav-item d-flex align-items-center justify-between'>
                        <a href="#" className='text-decoration-none' target="_blank" rel="noopener noreferrer">
                        <div className="d-flex align-items-center ps-2 text-dark ">
                            <div className="overflow-hidden" style={{width:"40px"}}>
                            <img src="/navBar/camera.gif" className='img-fluid p-0 m-0'alt="" style={{width:"50px",objectFit:"cover"}}/>
                            </div>
                            <span>Inspiration</span>
                        </div>
                    </a>
                        
                    </div>
                    <div className='nav-item d-none d-md-flex align-items-center justify-between'>
                        <div className="d-flex align-items-center">
                            <button className="btn d-flex  align-items-center gap-2 px-3 btn-warning rounded-pill">
                                <div className="overflow-hidden" style={{width:"30px"}}>
                            <img src="/navBar/video.gif" className='img-fluid p-0 m-0'alt="" style={{width:"50px",objectFit:"cover"}}/>
                            </div>
                            <span>Shop on Call</span>
                            </button>
                        </div>
                    </div>
                    <div className='nav-item d-flex align-items-center ms-3 justify-between'>
                        <div className="d-flex align-items-center">
                            <button className="btn d-flex  align-items-center gap-2 px-3 btn-warning rounded">
                            <span>Sign In</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='p-0 m-0'/>
            <div className='d-md-flex d-none justify-content-center align-items-center py-2 '>
                <nav className="nav navbar-expand">
                    <div className="container-fluid ">
                        <ul className="navbar-nav d-flex   gap-3">
                            {
                                categories.map((cat)=>(
                                    <li className="nav-item dropdown" key={cat.id}>
                                        <span className='dropdown-toggle p-1'>{cat.name}</span></li>
                                ))
                            }
                        </ul>
                        </div>                    


                </nav>

            </div>

       
            </div> 
            <div className="header-space" style={{minHeight:"135px"}}></div>

            {children}
    </div>
    </>
  )
}

export default Header
