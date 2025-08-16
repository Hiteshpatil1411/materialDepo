import React from 'react'

const BedRoomCarousal = ({items}) => {
  return (
    <>
    <div className="container bg-light my-5 ">
      {/* Section Title */}
      <div className="flex-column bg-light align-item-center py-2">
        <h3 className="text-center fw-bold">This way for bedroom serenity</h3>

      
      </div>

      {/* Gallery Grid */}
      <div className="row g-5">
  {
  items.map((item) => (
    <div
      key={item.id}
      className=" col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <div
          className=".gallery-item card border-0 shadow-sm h-100"
          style={{
            "--bs-card-border-color": "transparent",
            background: "transparent",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="card-img-top rounded-4"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
          <div className="card-body text-center p-2">
            <h6 className="fw-semibold text-truncate mb-0">{item.title}</h6>
            <p className="card-text"><small class="text-body-secondary">{item.price}</small></p>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>

    </div>
      
    </>
  )
}

export default BedRoomCarousal
