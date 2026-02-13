import React from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Mydata } from "../Data/Apidata";
import Subnav from "../components/Subnav";
import Header from "../components/Header";
import { Apidata } from "../Data/Apidata";
import { useCart, CartProvider } from "react-use-cart";
// import Preloder from "../components/preloder";

function Api() {
  const { addItem } = useCart();
  const { data, loading, error } = useContext(Mydata);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to load data",
        text: error,
        showCancelButton: false,
      });
    }
  }, [error]);

  if (loading) {
    return <h2 className="text-center text-primary mt-5">Loading...</h2>;
  }

  const getdata = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  return (
    <div>
      {/* <Preloder />  */}
      <Subnav />
      <Header />

      <h4 className="text-center my-4">Search about your products</h4>
      <input
        type="text"
        onChange={getdata}
        className="col-md-10 form-control w-50 m-auto "
        placeholder="Search about your products"
      />
      <div className="section properties">
        <div className="container">
          <div className="row properties-box">
            {data.map((item) => {
              return search === "" ? (
                <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6">
                  <div className="item">
                    <a href="property-details.html">
                      <img src={item.images[0]} alt="" />
                    </a>
                    <span className="category">{item.title}</span>
                    <h6>${item.price}</h6>
                    <h4>
                      <a href="property-details.html">{item.category}</a>
                    </h4>
                    <ul>
                      <li>
                        rating: <span>{item.rating}</span>
                      </li>
                      <li>
                        stock: <span>{item.stock}</span>
                      </li>
                      <li>
                        tags:<span>{item.tags[0]}</span>
                      </li>
                      <li>
                        sku: <span>{item.sku[0]}</span>
                      </li>
                      <li>
                        availabilityStatus:{" "}
                        <span>{item.availabilityStatus}</span>
                      </li>
                    </ul>
                    <div className="main-button">
                      <button onClick={() => {
                        addItem(item);
                        Swal.fire({
                          title: "Added To Cart",
                          text: `${item.title} has been added to your cart.`,
                          icon: "success",
                          confirmButtonText: "OK",
                        });
                      }}>Add To cart</button>
                    </div>
                  </div>
                </div>
              ) : item.title.toLowerCase().includes(search.toLowerCase()) ? (
                <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6">
                  <div className="item">
                    <a href="property-details.html">
                      <img src={item.images[0]} alt="" />
                    </a>
                    <span className="category">{item.title}</span>
                    <h6>${item.price}</h6>
                    <h4>
                      <a href="property-details.html">{item.category}</a>
                    </h4>
                    <ul>
                      <li>
                        rating: <span>{item.rating}</span>
                      </li>
                      <li>
                        stock: <span>{item.stock}</span>
                      </li>
                      <li>
                        tags:<span>{item.tags[0]}</span>
                      </li>
                      <li>
                        sku: <span>{item.sku[0]}</span>
                      </li>
                      <li>
                        availabilityStatus:{" "}
                        <span>{item.availabilityStatus}</span>
                      </li>
                    </ul>
                    <div className="main-button">
                      <button onClick={() => {
                        addItem(item);
                        Swal.fire({
                          title: "Added To Cart",
                          text: `${item.title} has been added to your cart.`,
                          icon: "success",
                          confirmButtonText: "OK",
                        });
                      }}>Add To cart</button>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Allapi() {
  return (
    <Apidata>
      <CartProvider>
        <Api />
      </CartProvider>
    </Apidata>
  );
}

export default Allapi;
