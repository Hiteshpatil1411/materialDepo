import React from 'react'

const ReviewCard = ({items}) => {
  return (
    <>
    <div className="py-2">
    <div className="title">
        <h2 className="text-center fw-bold">
            HAPPY CUSTOMERS
        </h2>
    </div>
    <section>
  <div className="container-fluid p-0 m-0">
    <div className="row d-flex justify-content-between g-3 px-4 m-0">
      {items.map((val, index) => (
        <div
          className="card col-12 col-md-4 p-1"
          key={index}
          style={{
            maxWidth: "440px",
            "--bs-card-border-color": "transparent",
            background: "transparent",
          }}
        >
          <div className="row g-0 align-items-center">
            {/* Profile Picture */}
            <div className="col-4 d-flex justify-content-center">
              <div
                className="profile position-relative z-1 bg-dark rounded-circle d-flex justify-content-center align-items-center my-2"
                style={{ width: "90px", height: "90px" }}
              >
                <img
                  src={val.profile}
                  alt={val.name}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                 <div className="px-2 position-absolute d-flex rounded top-100 bg-light text-dark start-50 fw-bold text-center translate-middle shadow fs-6" >
                                        <i className="bi bi-star-fill text-warning mx-1"> </i>   {val.rating}
                    </div>
              </div>
            </div>

            {/* User Info */}
            <div className="col-8">
              <div className="card-body d-flex flex-column justify-content-center h-100">
                <h5 className="card-title fw-bold text-dark fs-5 mb-1">
                  {val.name}
                </h5>
                <p className="card-text mb-0">
                  <small className="text-body-secondary">{val.role}</small>
                </p>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <p className="mt-2 mb-0">{val.comment}</p>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>

      
    </>
  )
}

export default ReviewCard
