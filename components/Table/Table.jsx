"use client";
import React from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Table = ({ data, inner }) => {
  const column = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra static">
        <thead>
          <tr>
            <th>No</th>
            {!column ? "" : column.filter((v) => v !== "id").map((data, i) => (
              <th key={i + "head"}>{capitalizeFirstLetter(data)}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id + "row"}>
                <td>{index + 1}</td>
                {column.filter((v) => v !== "id").map((v) => {
                  return <td key={item[v]}>{item[v]}</td>;
                })}
                <td className="flex flex-row ml-auto gap-3 w-fit">
                  {!inner ? "" : Object.entries(inner).map(([key, Component]) => (
                    <Component key={key} {...item} />
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;