import React from 'react'
import PopularCategories from './homeCol/PopularCategories'
import Gallery from './homeCol/Gallery';
import HeroCard from './homeCol/HeroCard';
import NewArival from './homeCol/NewArival';
import Catloug from './homeCol/Catloug';
import BedRoomCarousal from './homeCol/BedRoomCarousal';
import Explore from './homeCol/Explore';
import ReviewCard from './homeCol/ReviewCard';
import SignUp from './homeCol/SignUp';

const Home = () => {
const galleryItems = [
  // Bedroom
  { id: 1, image: "/pCatImg/10009.jpeg", title: "Modern Bedroom", category: "Bedroom", link: "#" },
  { id: 2, image: "/pCatImg/10009.jpeg", title: "Cozy Minimal Bedroom", category: "Bedroom", link: "#" },
  { id: 3, image: "/pCatImg/10009.jpeg", title: "Luxury Master Bedroom", category: "Bedroom", link: "#" },
  { id: 4, image: "/pCatImg/10009.jpeg", title: "Rustic Bedroom", category: "Bedroom", link: "#" },
  { id: 5, image: "/pCatImg/10009.jpeg", title: "Scandinavian Bedroom", category: "Bedroom", link: "#" },
  { id: 6, image: "/pCatImg/10009.jpeg", title: "Contemporary Bedroom", category: "Bedroom", link: "#" },

  // Kitchen
  { id: 7, image: "/pCatImg/10002.png", title: "Stylish Kitchen", category: "Kitchen", link: "#" },
  { id: 8, image: "/pCatImg/10002.png", title: "Modern Modular Kitchen", category: "Kitchen", link: "#" },
  { id: 9, image: "/pCatImg/10002.png", title: "Classic White Kitchen", category: "Kitchen", link: "#" },
  { id: 10, image: "/pCatImg/10002.png", title: "Compact Urban Kitchen", category: "Kitchen", link: "#" },
  { id: 11, image: "/pCatImg/10002.png", title: "Open Kitchen Concept", category: "Kitchen", link: "#" },
  { id: 12, image: "/pCatImg/10002.png", title: "Luxury Island Kitchen", category: "Kitchen", link: "#" },

  // Living Room
  { id: 13, image: "/pCatImg/10009.jpeg", title: "Cozy Living Room", category: "Living Room", link: "#" },
  { id: 14, image: "/pCatImg/10009.jpeg", title: "Minimalist Living Room", category: "Living Room", link: "#" },
  { id: 15, image: "/pCatImg/10009.jpeg", title: "Luxury Living Room", category: "Living Room", link: "#" },
  { id: 16, image: "/pCatImg/10009.jpeg", title: "Rustic Living Room", category: "Living Room", link: "#" },
  { id: 17, image: "/pCatImg/10009.jpeg", title: "Scandinavian Living Room", category: "Living Room", link: "#" },
  { id: 18, image: "/pCatImg/10009.jpeg", title: "Contemporary Living Room", category: "Living Room", link: "#" },

  // Bathroom
  { id: 19, image: "/pCatImg/10002.png", title: "Luxury Bathroom", category: "Bathroom", link: "#" },
  { id: 20, image: "/pCatImg/10002.png", title: "Minimalist Bathroom", category: "Bathroom", link: "#" },
  { id: 21, image: "/pCatImg/10002.png", title: "Spa-Inspired Bathroom", category: "Bathroom", link: "#" },
  { id: 22, image: "/pCatImg/10002.png", title: "Rustic Bathroom", category: "Bathroom", link: "#" },
  { id: 23, image: "/pCatImg/10002.png", title: "Classic Bathroom", category: "Bathroom", link: "#" },
  { id: 24, image: "/pCatImg/10002.png", title: "Contemporary Bathroom", category: "Bathroom", link: "#" },

  // Dining
  { id: 25, image: "/pCatImg/10002.png", title: "Elegant Dining", category: "Dining", link: "#" },
  { id: 26, image: "/pCatImg/10002.png", title: "Modern Dining Space", category: "Dining", link: "#" },
  { id: 27, image: "/pCatImg/10002.png", title: "Classic Wooden Dining", category: "Dining", link: "#" },
  { id: 28, image: "/pCatImg/10002.png", title: "Rustic Dining", category: "Dining", link: "#" },
  { id: 29, image: "/pCatImg/10002.png", title: "Minimalist Dining", category: "Dining", link: "#" },
  { id: 30, image: "/pCatImg/10002.png", title: "Contemporary Dining", category: "Dining", link: "#" },

  // Outdoor
  { id: 31, image: "/pCatImg/10002.png", title: "Outdoor Patio", category: "Outdoor", link: "#" },
  { id: 32, image: "/pCatImg/10002.png", title: "Garden Sitting Area", category: "Outdoor", link: "#" },
  { id: 33, image: "/pCatImg/10002.png", title: "Poolside Lounge", category: "Outdoor", link: "#" },
  { id: 34, image: "/pCatImg/10002.png", title: "Rustic Outdoor Space", category: "Outdoor", link: "#" },
  { id: 35, image: "/pCatImg/10002.png", title: "Minimalist Garden", category: "Outdoor", link: "#" },
  { id: 36, image: "/pCatImg/10002.png", title: "Luxury Outdoor Space", category: "Outdoor", link: "#" },

  // TV Unit
  { id: 37, image: "/pCatImg/10002.png", title: "Modern TV Unit", category: "TV Unit", link: "#" },
  { id: 38, image: "/pCatImg/10002.png", title: "Wall-Mounted TV Unit", category: "TV Unit", link: "#" },
  { id: 39, image: "/pCatImg/10002.png", title: "Minimal TV Unit", category: "TV Unit", link: "#" },
  { id: 40, image: "/pCatImg/10002.png", title: "Luxury TV Unit", category: "TV Unit", link: "#" },
  { id: 41, image: "/pCatImg/10002.png", title: "Classic Wooden TV Unit", category: "TV Unit", link: "#" },
  { id: 42, image: "/pCatImg/10002.png", title: "Contemporary TV Unit", category: "TV Unit", link: "#" },

  // Wardrobe
  { id: 43, image: "/pCatImg/10002.png", title: "Sliding Wardrobe", category: "Wardrobe", link: "#" },
  { id: 44, image: "/pCatImg/10002.png", title: "Walk-in Wardrobe", category: "Wardrobe", link: "#" },
  { id: 45, image: "/pCatImg10002.png", title: "Classic Wooden Wardrobe", category: "Wardrobe", link: "#" },
  { id: 46, image: "/pCatImg/10002.png", title: "Luxury Wardrobe", category: "Wardrobe", link: "#" },
  { id: 47, image: "/pCatImg/10002.png", title: "Minimal Wardrobe", category: "Wardrobe", link: "#" },
  { id: 48, image: "/pCatImg10002.png", title: "Contemporary Wardrobe", category: "Wardrobe", link: "#" },

  // See All
  { id: 49, image: "/pCatImg/10021.png", title: "SEE ALL", category: "All", link: "#" },
];
const catalogItems = [
  // Kitchen Tiles
  { id: 1, image: "/pCatImg/10002.png", title: "Stylish ", category: "Kitchen Tiles", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 2, image: "/pCatImg/10002.png", title: "Modern Modular ", category: "Kitchen Tiles", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 3, image: "/pCatImg/10002.png", title: "Classic White ", category: "Kitchen Tiles", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 4, image: "/pCatImg/10002.png", title: "Compact Urban ", category: "Kitchen Tiles", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 5, image: "/pCatImg/10002.png", title: "Open Kitchen ", category: "Kitchen Tiles", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 6, image: "/pCatImg/10002.png", title: "Luxury Island ", category: "Kitchen Tiles", price: "9000+ Products | From ₹694 / Sheet", link: "#" },

  // Wardrobe Finishes
  { id: 7, image: "/pCatImg/10009.jpeg", title: "Sliding ", category: "Wardrobe Finishes", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 8, image: "/pCatImg/10009.jpeg", title: "Walk-in ", category: "Wardrobe Finishes", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 9, image: "/pCatImg/10009.jpeg", title: "Classic Wooden ", category: "Wardrobe Finishes", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 10, image: "/pCatImg/10009.jpeg", title: "Luxury ", category: "Wardrobe Finishes", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 11, image: "/pCatImg/10009.jpeg", title: "Minimal ", category: "Wardrobe Finishes", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 12, image: "/pCatImg/10009.jpeg", title: "Contemporary ", category: "Wardrobe Finishes", price: "9000+ Products | From ₹694 / Sheet", link: "#" },

  // Cabinetry
  { id: 13, image: "/pCatImg/10002.png", title: "Modern Cabinetry", category: "Cabinetry", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 14, image: "/pCatImg/10002.png", title: "Luxury Cabinetry", category: "Cabinetry", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 15, image: "/pCatImg/10002.png", title: "Classic Wooden Cabinetry", category: "Cabinetry", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 16, image: "/pCatImg/10002.png", title: "Minimal Cabinetry", category: "Cabinetry", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 17, image: "/pCatImg/10002.png", title: "Contemporary Cabinetry", category: "Cabinetry", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 18, image: "/pCatImg/10002.png", title: "Rustic Cabinetry", category: "Cabinetry", price: "9000+ Products | From ₹694 / Sheet", link: "#" },

  // Wallpapers
  { id: 19, image: "/pCatImg/10009.jpeg", title: "Modern Wallpaper", category: "Wallpapers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 20, image: "/pCatImg/10009.jpeg", title: "Luxury Wallpaper", category: "Wallpapers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 21, image: "/pCatImg/10009.jpeg", title: "Minimal Wallpaper", category: "Wallpapers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 22, image: "/pCatImg/10009.jpeg", title: "Classic Wallpaper", category: "Wallpapers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 23, image: "/pCatImg/10009.jpeg", title: "Contemporary Wallpaper", category: "Wallpapers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 24, image: "/pCatImg/10009.jpeg", title: "Rustic Wallpaper", category: "Wallpapers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },

  // Louvers
  { id: 25, image: "/pCatImg/10002.png", title: "Modern Louvers", category: "Louvers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 26, image: "/pCatImg/10002.png", title: "Luxury Louvers", category: "Louvers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 27, image: "/pCatImg/10002.png", title: "Minimal Louvers", category: "Louvers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 28, image: "/pCatImg/10002.png", title: "Classic Louvers", category: "Louvers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 29, image: "/pCatImg/10002.png", title: "Contemporary Louvers", category: "Louvers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
  { id: 30, image: "/pCatImg/10002.png", title: "Rustic Louvers", category: "Louvers", price: "9000+ Products | From ₹694 / Sheet", link: "#" },
];
const bedroomCard = [
  // Louvers
  { id: 1, image: "/pCatImg/10002.png", title: "Modern Louvers", category: "Louvers", price: "₹694 / Sheet", link: "#" },
  { id: 2, image: "/pCatImg/10002.png", title: "Luxury Louvers", category: "Louvers", price: "₹694 / Sheet", link: "#" },
  { id: 3, image: "/pCatImg/10002.png", title: "Minimal Louvers", category: "Louvers", price: "₹694 / Sheet", link: "#" },
  { id: 4, image: "/pCatImg/10002.png", title: "Classic Louvers", category: "Louvers", price: "₹694 / Sheet", link: "#" },
  { id: 5, image: "/pCatImg/10002.png", title: "Contemporary Louvers", category: "Louvers", price: "₹694 / Sheet", link: "#" },
  { id: 6, image: "/pCatImg/10002.png", title: "Rustic Louvers", category: "Louvers", price: "₹694 / Sheet", link: "#" },
];
const reviews= [
    {id:1,
    name:"Arun pushpa",
    role:"Interior Designer",
    comment:"I wholeheartedly recommend Material Depot to all architects and designers. Found a brand, got quotes, ordered hassle-free, and smooth delivery. Impressive!",
    profile:"/pCatImg/cp1.svg",
rating:5},
    {id:2,
    name:"Shriprem",
    role:"Interior Designer",
    comment:"I wholeheartedly recommend Material Depot to all architects and designers. Found a brand, got quotes, ordered hassle-free, and smooth delivery. Impressive!",
    profile:"/pCatImg/cp2.svg",
    rating:5},
    {id:3,
    name:"Anser pushpa",
    role:"Interior Designer",
    comment:"I wholeheartedly recommend Material Depot to all architects and designers. Found a brand, got quotes, ordered hassle-free, and smooth delivery. Impressive!",
    profile:"/pCatImg/cp3.svg",
rating:5},
]



  return (
    <>
     <div className="container-fluid px-sm-5 m-0  " >
        <div className="mt-2 " style={{minWidth:"100%",minHeight:"550px"}}>
            <HeroCard/>
        </div>
        <div className="mt-2" >
            
                
                <PopularCategories/>
            
        </div>
        <div className="mt-2" >
            
                
                <Gallery items={galleryItems} />            
        </div>
        <div className="mt-2" >
            
                
                <NewArival />            
        </div>
        <div className="mt-2" >
            
                
                <Catloug items={catalogItems}/>            
        </div>
        <div className="mt-2" >
            
                
                <BedRoomCarousal items={bedroomCard}/>            
        </div>
        <div className="mt-2  rounded-3" >
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/pCatImg/shopNow.jpg" alt="" className='img-fluid w-100' />
            </a>
        </div>
        <div className="mt-2" >
            
                
                <Explore/>            
        </div>
        <div className="mt-2" >
            
                
                <ReviewCard items={reviews}/>            
        </div>
        <div className="mt-4" >
            
                
                <SignUp/>            
        </div>
        <div className="mt-4">
          <div className=" d-flex justify-content-around flex-wrap p-3">
            <div className="card  border-0 text-center p-2" style={{width:"100px"}}>
              <img src="/navBar/Brands.svg" alt="Brands" className="img-fluid card-img-top" />
              <p className="fw-bold m-0">200+</p>
              <p className="m-0">Brands</p>
            </div>

            <div className="card border-0 text-center p-2" style={{width:"100px"}}>
              <img src="/navBar/Customers.svg" alt="Customers" className="img-fluid card-img-top" />
              <p className="fw-bold m-0">2500 00+</p>
              <p className="m-0">Customers</p>
            </div>

            <div className="card border-0 text-center p-2" style={{width:"100px"}}>
              <img src="/navBar/Products.svg" alt="Products" className="img-fluid card-img-top" />
              <p className="fw-bold m-0">30000+</p>
              <p className="m-0">Products</p>
            </div>

            <div className="card border-0 text-center p-2" style={{width:"100px"}}>
              <img src="/navBar/Architects.svg" alt="Architects" className="img-fluid card-img-top" />
              <p className="fw-bold m-0">1100+</p>
              <p className="m-0 text-break">Architects</p>
            </div>
          </div>
        </div>
        <div className="mt-2">
                <h2 className="text-center fw-bold">Today's Question </h2>
        <div className="row gap-0 rounded-4 p-4 " style={{backgroundColor:"rgb(245,245,246)"}}>
           <span className='fs-5 my-2'>Can I use plywood for flooring?
</span>
<p className='fs-6 text-secondary lh-base font-monospace'>Yes, plywood is a popular choice for subfloors and finished flooring in low-traffic areas. It provides stability, durability, and can be finished with various options such as laminate or veneer. <a href="#" target="_blank" rel="noopener noreferrer">Full answer</a>
</p> 
<span><a href="#" target="_blank" rel="noopener noreferrer"> See all QnAs</a></span>
        </div>

        </div>
        <div className="mt-2">
                <p className="p-0 m-0 text-center fw-bold"> Our Trusted <span className='text-warning'>Clients</span></p>
                <div className="d-flex justify-content-between p-3">
                        <img src="/pCatImg/10001.svg" alt="" srcset="" className='img-fluid' style={{width:"160px"}}/>
                        <img src="/pCatImg/10002.svg" alt="" srcset="" className='img-fluid' style={{width:"160px"}}/>
                        <img src="/pCatImg/10003.svg" alt="" srcset="" className='img-fluid' style={{width:"160px"}}/>
                        <img src="/pCatImg/10004.png" alt="" srcset="" className='img-fluid' style={{width:"160px"}}/>
                </div>
        </div>
        <div className="mt-4">
                <p className="text-center">Top Stories</p>
                <div className="row g-2 mx-1" >
                <div className="col-12 col-md-4 border rounded-2 d-flex flex-column" >
                    <div className="booking  ">
                        <div className="d-md-block  ">
                            <img src="/pCatImg/10005.png" alt="" className='img-fluid rounded-4' style={{ width: "100%", height: "100%s", objectFit: "cover" }}/>
                        </div>
                    </div>
                    <div className='p-3'>
                        <h4 className="text-center my-2">Featured in YOURSTORY</h4>
                        <p className="text-center">Material Depot was recently featured on YOURSTORY for its innovative approach to simplifying the process of material discovery and procurement.</p>

                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="row g-2">
                            
                        <div className="col-md-12   ">
                            <div className="collection m-2 border rounded-2">
                        <div className="d-md-flex align-items-center gap-3 p-3 ">
                            <img src="/pCatImg/10006.png" alt="" className='img-fluid r' style={{ width: "70%", height: "", objectFit: "cover" }}/>
                            <div>
                                <p className="fw-bold fs-5">
Material Depot @YCombinator</p>
                                <p className="text-secondary">"Material Depot, a platform revolutionizing the way architects and designers source materials, has been accepted into Y Combinator's prestigious startup accelerator program."</p>

                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-12  ">
                             <div className="collection m-2 border rounded-2">
                        <div className="d-md-flex align-items-center gap-3 p-3 ">
                            <img src="/pCatImg/10007.png" alt="" className='img-fluid r' style={{ width: "70%", height: "", objectFit: "cover" }}/>
                            <div>
                                <p className="fw-bold fs-5">
Material Depot @YCombinator</p>
                                <p className="text-secondary">"Material Depot, a platform revolutionizing the way architects and designers source materials, has been accepted into Y Combinator's prestigious startup accelerator program."</p>

                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>        </div>

     </div>
    </>
  )
}

export default Home
