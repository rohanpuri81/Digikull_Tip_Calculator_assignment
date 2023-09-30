import React from "react";

const Total = ({ data }) => {
  const style = {
    div: {
      width: "70vw",
      marginBottom: "5px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      border: "1px solid black",
    },
    td: {
      textAlign: "center",
      border: "1px solid black",
      width: "50%",
    },
  };
  const totalCust = data.length;
  const totalTip = data.reduce((acc, curr) => {
    return (acc += curr.tipA);
  }, 0);

  return (
    <div className="total" style={{ ...style.div }}>
      <table style={{ ...style.table }}>
        <thead>
          <tr>
            <th style={{ ...style.td }}> Total Customers</th>
            <th>Total Tip</th>
          </tr>
          <tr>
            <td
              style={{
                ...style.td,
              }}
            >
              {totalCust}
            </td>
            <td
              style={{
                ...style.td,
              }}
            >
              &#8377; {Math.round(totalTip)}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Total;
