import React from "react";
import calculateWeights from "@/lib/weightedNormalizedScore";
import normalizeScores from "@/lib/normalizeScore";
const SortedList = ({ data }) => {
  const weightedScores = calculateWeights(normalizeScores(data));
  const alternativeNames = Object.keys(weightedScores);
  const criteriaNames = [...new Set(data.map((item) => item.criteria.name))];
  const sumScore = alternativeNames.map((alternatives) => {
    let totalScore = 0;
    criteriaNames.map((criteria) => {
      const score = weightedScores[alternatives][criteria];
      totalScore += score;
    });
    return {
      alternatives,
      totalScore,
    };
  });
  return (
    <div className="overflow-x-auto drop-shadow-lg">
      <h1 className="text-lg">Ranking.</h1>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>No</th>
            <th>Alternatives</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
           {[...sumScore].sort((a,b) => a.totalScore < b.totalScore ? 1 : -1).map((item, i) => 
                <tr key={i}>
                       <td>{i+1}</td>
                       <td>{item.alternatives}</td>
                       <td>{item.totalScore.toFixed(3)}</td> 
                </tr>        
           )}
        </tbody>
      </table>
    </div>
  );
};

export default SortedList;
