import React from 'react'
import  { useState } from "react";
const Catloug = ({items}) => {
    const categories = [
    "Kitchen Tiles",
    "Wardrobe Finishes",
    "Cabinetry",
    "Wallpapers",
    "Louvers"
  ];
  const [activeCategory, setActiveCategory] = useState("Kitchen Tiles");
  const filteredItems =
    activeCategory === "Kitchen Tiles"
      ? items
      : items.filter((item) => item.category === activeCategory);
  return (
    <>
     <div className="container bg-light my-5">
      {/* Section Title */}
      <div className="flex-column bg-light align-item-center py-2">
        <h3 className="text-center fw-bold">Elite Selection, Irresistible Prices</h3>

      {/* Category Buttons */}
      <div className="my-4 d-flex justify-content-center  flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn fs-5 ${
              activeCategory === cat
                ? "btn-primary"
                : " btn-outline-secondary"
                 
            } rounded-3 px-3`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      </div>

      {/* Gallery Grid */}
      <div className="row g-5">
  {[
    ...filteredItems.slice(0, 6), // first 7 items
    
  ].map((item) => (
    <div
      key={item.id}
      className=" col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
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
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <div className="card-body text-center p-2">
            <h6 className="fw-semibold text-truncate mb-0">{item.title}</h6>
            <p class="card-text"><small class="text-body-secondary">{item.price}</small></p>
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

export default Catloug
