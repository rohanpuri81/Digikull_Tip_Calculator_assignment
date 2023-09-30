import React from "react";

const Input = ({ singData, setSingData, data, setData }) => {
  return (
    <div className="input">
      <div className="bill">
        <p style={{ color: "grey" }}>Enter Bill Amount</p>
        <input
          type="number"
          value={singData.amount}
          onChange={(e) => {
            setSingData({ ...singData, amount: e.target.value });
          }}
          placeholder="1000"
        />
      </div>
      <hr />
      <div className="options">
        <form action="" className="options">
          <p>How was the service</p>
          <select
            required
            value={singData.service}
            onChange={(e) => {
              setSingData({ ...singData, service: e.target.value });
            }}
          >
            <option value="Choose">Choose</option>
            <option value="20">Excellent 20%</option>
            <option value="10">Moderate 10%</option>
            <option value="5">Bad 5%</option>
          </select>
          <input
            type="text"
            required
            value={singData.name}
            onChange={(e) => {
              setSingData({ ...singData, name: e.target.value });
            }}
            placeholder="Customer Name"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (
                singData.amount != 0 &&
                singData.service != "Choose" &&
                singData != ""
              ) {
                setData([
                  ...data,
                  {
                    amount: Number(singData.amount),
                    service: Number(singData.service),
                    name: singData.name,
                    tipA:
                      (Number(singData.amount) / 100) *
                      Number(singData.service),
                  },
                ]);
                setSingData({ amount: 0, service: "Choose", name: "" });
                console.log(data);
              }
            }}
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
