
export default function PopularCategories() {
  const categories = [
    { id: 1, name: "Tiles", image: "/pCatImg/tiles.png" },
    { id: 2, name: "Laminates", image: "/pCatImg/ca2.jpeg" },
    { id: 3, name: "Wall Panels", image: "/pCatImg/ca2.jpeg" },
    { id: 4, name: "Plywood", image: "/pCatImg/ca3.png" },
    { id: 5, name: "Hardware", image: "/pCatImg/ca4.png" },
    { id: 6, name: "Paints", image: "/pCatImg/ca5.png" },
    { id: 7, name: "Tiles", image: "/pCatImg/ca7.png" },
    { id: 8, name: "Laminates", image: "/pCatImg/ca8.jpeg" },
    { id: 9, name: "Wall Panels", image: "/pCatImg/ca6.jpg" },
    { id: 10, name: "Plywood", image: "/pCatImg/ca2.jpeg" },
    { id: 11, name: "Hardware", image: "/pCatImg/ca1.jpeg" },
    { id: 12, name: "All Categories", image: "/pCatImg/allca.jpg" },
  ];

  return (
    <div className="mx-1 bg-info">

    <div className="flex-column bg-light align-item-center py-2 ">
                        <h2 className="text-center fw-bold">Popular Categories</h2>
                        <p className="text-center">Stunning Range For Your Dream Space</p>
                    </div>
    <section className="py-5 bg-light">
      <div className="container">
       

        {/* Grid */}
       <div className="row g-4">
  {categories.map((cat) => (
    <div key={cat.id} className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
      <a
        href={cat.link} // Replace with your actual link
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <div
          className="card h-100 category-card"
          style={{ "--bs-card-border-color": "transparent" }}
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="card-img-top rounded-4"
            style={{ width: "160px", height: "160px", objectFit: "cover" }}
          />
          <div className="card-body text-center p-2">
            <h6 className="fw-semibold text-truncate mb-0">{cat.name}</h6>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>

      </div>
    </section>
    </div>
  );
}
