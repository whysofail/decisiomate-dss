import React from 'react';

const ScoreTable = ({ data }) => {
  // Extract unique criteria names and alternative names
  const criteriaNames = [...new Set(data.map(item => item.criteria.name))];
  const alternativeNames = [...new Set(data.map(item => item.alternative.name))];

  // Calculate the total weights
  const totalWeights = data.reduce((total, item) => total + item.criteria.weight, 0);

  // Normalize the scores for each criterion
  const normalizedData = data.map(item => ({
    ...item,
    normalizedScore: item.score / Math.max(...data.filter(i => i.criteriaId === item.criteriaId).map(i => i.score))
  }));

  // Calculate the weighted scores for each alternative
  const weightedScores = alternativeNames.map(alternative => {
    const scores = normalizedData.filter(item => item.alternative.name === alternative).map(item => ({
      criterion: item.criteria.name,
      weightedScore: item.normalizedScore * (item.criteria.weight / totalWeights)
    }));
    return { alternative, scores };
  });

  // Calculate the total weighted score for each alternative
  const rankedAlternatives = weightedScores.map(alternative => {
    const totalWeightedScore = alternative.scores.reduce((sum, item) => sum + item.weightedScore, 0);
    return { alternative: alternative.alternative, totalWeightedScore };
  });

  // Sort the alternatives based on their total weighted scores
  rankedAlternatives.sort((a, b) => b.totalWeightedScore - a.totalWeightedScore);

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Alternatives</th>
          {criteriaNames.map(criteria => <th key={criteria}>{criteria}</th>)}
          <th>Total Weighted Score</th>
        </tr>
      </thead>
      <tbody>
        {rankedAlternatives.map((alternative, index) => (
          <tr key={alternative.alternative}>
            <td>{index + 1}</td>
            <td>{alternative.alternative}</td>
            {criteriaNames.map(criteria => {
              const score = weightedScores.find(item => item.alternative === alternative.alternative).scores.find(item => item.criterion === criteria).weightedScore;
              return <td key={criteria}>{score.toFixed(2)}</td>;
            })}
            <td>{alternative.totalWeightedScore.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;
