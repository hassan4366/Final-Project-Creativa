import React, { useContext } from "react";
import Subnav from "../components/Subnav";
import { CartProvider, useCart } from "react-use-cart";
import Header from "../components/Header";
import swal from "sweetalert2";
import { Apidata, Jsondata } from "../Data/Jsondata";

function Shop() {
  const { addItem } = useCart();
    const { data, loading, error } = useContext(Jsondata);
    
  if (loading) {
        return <h2 className="text-center text-primary mt-5">Loading...</h2>;
}
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  return (
    <div>
      <div className="section properties">
        <div className="container">
          <div className="row">
            <h2 className="col-md-12 mb-2 text-center"> Shop Products</h2>
            {data.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6">
                  <div className="item">
                    <a href="property-details.html">
                      <img src={item.images} alt={item.title} />
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
                        description: <span>{item.description}</span>
                      </li>
                    </ul>
                    <div className="main-button">
                      <button
                        onClick={() => {
                          addItem(item);
                          swal.fire({
                            title: "Added To Cart",
                            text: `${item.name} has been added to your cart.`,
                            icon: "success",
                            confirmButtonText: "OK",
                          });
                        }}
                      >
                        Add To cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


function Allshop() {
  return (
    <Apidata>
      <CartProvider>
        <Subnav />
        <Header />
        <Shop />
      </CartProvider>
    </Apidata>
  );
}

export default Allshop;
