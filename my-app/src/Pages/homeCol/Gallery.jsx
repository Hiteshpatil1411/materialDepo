// src/components/Gallery.jsx
import React, { useState } from "react";

const Gallery = ({ items }) => {
  const categories = [
    "All",
    "Kitchen",
    "Bedroom",
    "Living Room",
    "Bathroom",
    "Dining",
    "Outdoor",
    "TV Unit",
    "Wardrobe",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Filtered items based on selected category
  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="container bg-light my-5">
      {/* Section Title */}
      <div className="flex-column bg-light align-item-center py-2">
        <h3 className="text-center fw-bold">Inspiration Gallery</h3>

      {/* Category Buttons */}
      <div className="mb-4 d-flex justify-content-center  flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn fs-5 ${
              activeCategory === cat
                ? "btn-primary"
                : "text-dark"
                 
            } rounded-5 px-4`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      </div>

      {/* Gallery Grid */}
      <div className="row g-4">
  {[
    ...filteredItems.slice(0, 7), // first 7 items
    { id: "see-all", image: "/pCatImg/10021.png", title: "SEE ALL", link: "#" }
  ].map((item) => (
    <div
      key={item.id}
      className=" col-6 col-md-4 col-lg-3 d-flex justify-content-center"
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
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className="card-body text-center p-2">
            <h6 className="fw-semibold text-truncate mb-0">{item.title}</h6>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>

    </div>
  );
};

export default Gallery;
