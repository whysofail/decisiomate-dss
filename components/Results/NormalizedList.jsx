import React from "react";
import normalizeScores from "@/lib/normalizeScore";

const NormalizedList = ({ data }) => {
  const criteriaNames = [...new Set(data.map((item) => item.criteria.name))];
  const alternativeNames = [...new Set(data.map((item) => item.alternative.name))];
  const normalizedScore = normalizeScores(data);
  return (
    <div className="overflow-x-auto drop-shadow-lg">
      <h1 className="text-lg">Normalized Data</h1>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Alternatives</th>
            {criteriaNames.map((criteria) => (
              <th key={criteria}>{criteria}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {alternativeNames.map((alternative) => (
            <tr key={alternative}>
              <td>{alternative}</td>
              {criteriaNames.map((criteria) => {
                const score = normalizedScore.find(
                  (item) =>
                    item.criteria.name === criteria &&
                    item.alternative.name === alternative
                ).normalizedScore;
                return <td key={criteria}>{score.toFixed(3)}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NormalizedList;
