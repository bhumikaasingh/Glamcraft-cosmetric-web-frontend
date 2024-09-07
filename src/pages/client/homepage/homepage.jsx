import React from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import Typewriter from "../../../components/Typewriter/Typewriter";

const Homepage = ({ searchQuery, data }) => {
  const searchParams = data.length > 0 ? Object.keys(data[0]) : [];

  const search = (data, query) => {
    if (!query) return data;
    return data.filter((item) =>
      searchParams.some((param) =>
        item[param].toString().toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const filteredData = search(data, searchQuery);

  return (
    <div>
      <Breadcrumb />
      <div className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
  <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-1 lg:order-1 shadow-2xl">
      <img
        className="h-100 w-100 object-cover lg:w-[500px] lg:h-[500px]"
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxtYWtlJTIwdXAlMkNnbGFtfGVufDB8fHx8MTYxMjQ1NjU4Nnw&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Glam Craft"
      />
    </div>
    <div className="order-2 lg:order-2 flex flex-col justify-center lg:items-start text-center sm:text-left">
      <p className="mt-2 text-3xl md:text-lg sm:text-sm text-gray-800">Welcome to</p>
      <p className="text-4xl font-bold md:text-7xl text-gray-800">
        <span className="text-pink-500">Glam Craft</span>.
      </p>
      <p className="text-3xl md:text-6xl text-gray-800">
        Your Destination for
        <span>
          
            <Typewriter
            words={['Beauty.', 'Elegance.', 'Confidence.', 'Style.']}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
      <p className="mt-2 lg:text-2xl md:text-lg sm:text-sm text-gray-800">
        Discover premium cosmetics that elevate your look and highlight your unique beauty.
      </p>
      <div className="flex">
        <button className="text-lg md:text-2xl bg-pink-500 text-white py-2 m-2 px-5 mt-10 hover:bg-gray-800 rounded-full">
          <a href="/contact">Contact Us</a>
        </button>
        <button className="text-lg md:text-2xl bg-pink-500 text-white py-2 m-2 px-5 mt-10 hover:bg-gray-800 rounded-full" >
         <a href="/contact">  Shop Now✨ </a>
        </button>
      </div>
    </div>
  </div>
</div>


      <div className="text-center">
        <p className="text-3xl m-8 font-bold">Featured Products</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredData.length > 0 ? (
          filteredData.slice(0, 8).map((item) => (
            <div key={item._id} className="w-1/5 p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`http://localhost:5500/products/${item.productImage.replace(/\s/g, '%20')}
`}
                  alt={item.productName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <Link to={`/product-details/${item._id}`}>
                    <h2 className="text-lg font-bold">{item.productName}</h2> </Link>
                  <p className="text-gray-600">{`Rs.${item.productPrice}`}</p>
                  <p className="text-gray-600">{item.productDescription}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
    
     
  );
};

export default Homepage;