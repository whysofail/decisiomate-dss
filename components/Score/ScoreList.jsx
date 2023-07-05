'use client'
import React, { useState, useCallback } from "react";

// eslint-disable-next-line react/display-name
const ScoreInput = React.memo(({ altIndex, critIndex, criteriaName, onInputChange }) => {
  const handleInputChange = useCallback((e) => {
    const { value } = e.target;
    onInputChange(altIndex, critIndex, value);
  }, [altIndex, critIndex, onInputChange]);

  return (
    <input
      className="input input-bordered w-full max-w-xs"
      placeholder={criteriaName}
      onChange={handleInputChange}
    />
  );
});

const ScoreList = ({ alternatives, criterias }) => {
  const [scores, setScores] = useState([]);
  const handleInputChange = useCallback((altIndex, critIndex, value) => {
    const updatedScores = [...scores];
    const scoreIndex = updatedScores.findIndex(
      (score) =>
        score.alternativeId === altIndex + 1 && score.criteriaId === critIndex + 1
    );

    if (scoreIndex !== -1) {
      // Update existing score
      updatedScores[scoreIndex] = {
        alternativeId: altIndex + 1,
        criteriaId: critIndex + 1,
        score: parseInt(value, 10),
      };
    } else {
      // Add new score
      updatedScores.push({
        alternativeId: altIndex + 1,
        criteriaId: critIndex + 1,
        score: parseInt(value, 10),
      });
    }

    setScores(updatedScores);
  }, [scores]);

  const handleClick = () => {
    console.log(scores)
  }

  return (
    <div className="overflow-x-auto">
      <button className="btn" onClick={handleClick}>Click Me</button>
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
          {alternatives.data.map((alternative, altIndex) => {
            return (
              <tr key={alternative.name}>
                <td>{altIndex + 1}</td>
                <td>{alternative.name}</td>
                {criterias.data.map((criteria, critIndex) => (
                  <td key={criteria.id}>
                    <ScoreInput
                      altIndex={altIndex}
                      critIndex={critIndex}
                      criteriaName={criteria.name}
                      onInputChange={handleInputChange}
                    />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreList;
