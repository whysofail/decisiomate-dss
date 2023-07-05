import Table from "../Table/Table";
import React from "react";
const getAlternatives = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/alternatives", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

const getCriterias = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/criterias", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

const ScoreList = async () => {
  const criterias = await getCriterias();
  const alternatives = await getAlternatives();
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            {criterias.data.map((item) => (
              <th key={item.id}>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {alternatives.data.map((item, index) => {
            return (
              <tr key={item.name}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                {criterias.data.map((item) => {
                  return (
                    <td key={item.id}>
                      <div className="join">
                      <button className="btn btn-info join-item rounded-r-full">
                          Score
                        </button>
                        <input
                          className="input input-bordered w-full max-w-[5rem] join-item"
                          placeholder={item.name}
                        />
                       
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreList;
