import React, { useEffect, useState } from "react";
import "./ECommerce.css";

function ECommerce() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching products
    setProducts([ 
      { id: 1, name: "Turmeric Powder", price: "$10", image: "photos/turmeric.jpg" },
      { id: 2, name: "Ashwagandha ", price: "$15", image: "photos/ashwagandha.jpg"},
      { id: 3, name: "Triphala Powder", price: "$12", image: "photos/triphala.jpg" },
      { id: 4, name: "Haritaki ", price: "$8", image: "photos/Haritaki.jpg" },

    ]);
  }, []);

  return (
    <div className="ecommerce">
      <h2>Personalized Ayurvedic Products</h2>
      <div className="product-list" >
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ECommerce;