import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [product, setProduct] = useState([]);

  const getDashboardData = async () => {
    const dashData = await axios.get("http://localhost:3003/dashboard");
    setData(dashData.data.message);
  };

  const getServiceData = async () => {
    const serviceData = await axios.get("http://localhost:3003/service");
    setData(serviceData.data.message);
  };

  const getProduct = async () => {
    const productData = await axios.get("http://localhost:3003/products");
    setProduct(productData.data);
  };

  return (
    <div className="App">
      <button onClick={getDashboardData}>Get Dashboard Data</button>
      <button onClick={getServiceData}>Get Service Data</button>
      <button onClick={getProduct}>Get Product Data</button>
      <br/>
      {data}
      <br/>
      <ul>
        {
          product.map((item) => {
            return <li> {item.name} - {item.price}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
