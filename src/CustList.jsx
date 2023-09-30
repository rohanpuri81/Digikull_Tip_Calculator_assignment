import React from "react";

const CustList = ({ data }) => {
  return (
    <div className="custList">
      <h3>Customer List</h3>
      <hr />
      <div className="list">
        <ul>
          {data.map((cust) => {
            return (
              <li key={cust.name}>
                {cust.name} is offering a tip of {cust.tipA} rupee.
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CustList;
