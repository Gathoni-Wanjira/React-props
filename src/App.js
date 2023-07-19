import React from "react";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    // Add the product properties to apply to each product rendered.
    
    <div>
<h1>Amazon product release.</h1>
        
      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={60.42}
      />

<Product
        name="Iphone"
        description="Latest apple release"
        price={600.42}
      />

<Product
        name="Microwave"
        description="New lg product release"
        price={140.42}
      />

<Product
        name="Mirror "
        description="Sticky wall mirrors"
        price={87.42}
      />

    </div>
  );
}

export default App;
