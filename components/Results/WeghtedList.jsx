import React from "react";
import normalizeScores from "@/lib/normalizeScore";
import calculateWeights from "@/lib/weightedNormalizedScore";

const ResultList = ({ data }) => {
  const weightedScores = calculateWeights(normalizeScores(data));
  const alternativeNames = Object.keys(weightedScores);
  const criteriaNames = [...new Set(data.map((item) => item.criteria.name))];

  return (
    <div className="overflow-x-auto">
      <h1 className="text-lg">Weighted Scores</h1>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Alternatives</th>
            {criteriaNames.map((criteria) => (
              <th key={criteria}>{criteria}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {alternativeNames.map((alternative) => {
            let totalScore = 0;
            return (
              <tr key={alternative}>
                <td>{alternative}</td>
                {criteriaNames.map((criteria) => {
                  const score = weightedScores[alternative][criteria];
                  totalScore += score;
                  return <td key={criteria}>{score.toFixed(3)}</td>;
                })}
                <td>{totalScore.toFixed(3)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultList;
