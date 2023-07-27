import axios from "axios";
import React, { useEffect, useState } from "react";
import Pricetag from "./Pricetag";
import Footer from "./footer[1]";

function Sokopreview() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:8000/api/services/soko/").then((res) => {
        console.log(res.data);
        const Data = res.data;
        setProduct(Data);
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <div>
      <div className="md:grid grid-cols-4 gap-16 flex flex-col">
        {product.map((product) => {
          return (
            <div>
              {
                <Pricetag
                  commodity={product.commodity}
                  image={product.image}
                  last_price={product.last_price}
                  current_price={product.current_price}
                />
              }
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  ); 
}

export default Sokopreview;
