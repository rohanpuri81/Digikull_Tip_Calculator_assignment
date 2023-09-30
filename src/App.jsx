import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Input from "./Input";
import CustList from "./CustList";
import Footer from "./Footer";
import Total from "./Total";

function App() {
  const btnStyle = {
    background: "#00ac57",
    padding: "5px 10px",
    border: "none",
    color: "white",
  };

  const [singData, setSingData] = useState({
    amount: "",
    service: "Choose",
    name: "",
  });
  const [data, setData] = useState([]);
  const [totalShow, setTotalShow] = useState(false);
  return (
    <div className="App">
      <Header />
      <Input
        singData={singData}
        setSingData={setSingData}
        data={data}
        setData={setData}
      />
      <CustList data={data} />
      <button
        onClick={() => {
          if (data.length == 0) {
            alert("Please add Customers in the list First");
          } else {
            setTotalShow(true);
          }
        }}
        style={{ ...btnStyle }}
      >
        Calculate Tip & Customer
      </button>
      {totalShow ? <Total data={data} /> : null}
      <Footer />
    </div>
  );
}

export default App;
