import React from 'react'

const NewArival = () => {
      const categories = [
    { id: 1, name: "Countertops" ,creator:"Countertops", image: "/pCatImg/tiles.png" },
    { id: 2, name: "Leather Laminates",creator:"Soul", image: "/pCatImg/ca2.jpeg" },
    { id: 3, name: "Wardrobe Laminates",creator:"Nazrana", image: "/pCatImg/ca2.jpeg" },
      ]
  return (
    <>
    
    <div className="mx-1 bg-info " >

    <div className=" bg-light  py-2 ">
                        <h2 className="text-center fw-bold">New Arivals</h2>
                    </div>
    <section className="py-4 bg-light">
      <div className="container">
       

        {/* Grid */}
       <div className="row g-5">
  {categories.map((cat) => (
    <div key={cat.id} className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center">
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

          <div className="card-body text-center p-2">
            <h6 className="fw-semibold text-truncate mb-0">
              <span className="fw-bold">{cat.name} </span>
              <span>from </span>
              <span className="fw-bold" style={{ color: "rgb(168, 122, 132)" }}>{cat.creator}</span>
            </h6>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>

      </div>
    </section>
    </div>    
      
    </>
  )
}

export default NewArival
