import React from 'react'

const HeroCard = () => {
  return (
    <>
      <div className="row g-2 mx-1" style={{minHeight:"540px"}}>
                <div className="col-12 col-md-8 " >
                    <div className="booking  ">
                        <div className="d-md-block  ">
                            <img src="/pCatImg/booking.png" alt="" className='img-fluid rounded-4' style={{ width: "100%", height: "100%s", objectFit: "cover" }}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="row h-100 g-0">
                            
                        <div className="col-md-12 h-50 pb-2 ">
                            <div className="collection ">
                        <div className="d-md-block  ">
                            <img src="/pCatImg/c2.jpeg" alt="" className='img-fluid rounded-4' style={{ width: "100%", height: "100%s", objectFit: "cover" }}/>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-12 h-50 pt-1 ">
                            <div className="sample  ">
                        <div className="d-md-block  ">
                            <img src="/pCatImg/c3.jpeg" alt="" className='img-fluid rounded-4' style={{ width: "100%", height: "100%s", objectFit: "cover" }}/>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default HeroCard
