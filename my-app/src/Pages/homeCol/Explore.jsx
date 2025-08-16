import React from 'react'

const Explore = () => {
     const categories = [
    { id: 1, name: "Flexible PVC Laminates" ,discription:"Marble Panels, Bendable Sheet", image: "/pCatImg/tiles.png" },
    { id: 2, name: "Everlast SPC Floors",discription:"Durability Meets Style, Built to Last", image: "/pCatImg/ca2.jpeg" },
    { id: 3, name: "Authentic Veneers",discription:"Real Wood, Timeless Elegance", image: "/pCatImg/ca2.jpeg" },
      ]
  return (
    <>
    

    <div className=" bg-light  py-2  mt-4">
                        <h2 className="text-center fw-bold">More to Explore</h2>
                    </div>
    <section className="py-1 bg-light">
      <div className="container">
       

        {/* Grid */}
       <div className="row g-5">
  {categories.map((cat) => (
    <div key={cat.id} className="col-8 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center">
      <a
        href={cat.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none w-100"
      >
        <div
          className="card h-100 category-card"
          style={{ "--bs-card-border-color": "transparent", background: "transparent" }}
        >
          {/* Image container to keep square aspect */}
          <div className="position-relative w-100" >
          <img
              src={cat.image}
              alt={cat.name}
              className="w-100 rounded-4"
              style={{ aspectRatio: "3 / 2", objectFit: "cover" }}
            />
          </div>

          <div className="card-body d-flex flex-column justify-content-center text-center align-content-center p-2">
            <h4 className="fw-bold text-truncate mb-0">
              {cat.name}
              </h4>
              <p className='text-truncate'>{cat.discription}</p>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>

      </div>
    </section>
   
      
    </>
  )
}

export default Explore
