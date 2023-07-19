"use client";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

// eslint-disable-next-line react/display-name
const ScoreInput = React.memo(
  ({ altIndex, critIndex, criteriaName, onInputChange }) => {
    const handleInputChange = useCallback(
      (e) => {
        const { value } = e.target;
        onInputChange(altIndex, critIndex, value);
      },
      [altIndex, critIndex, onInputChange]
    );

    return (
      <input
        required
        className="input input-bordered w-full max-w-xs"
        placeholder={criteriaName}
        onChange={handleInputChange}
      />
    );
  }
);

const ScoreList = ({ alternatives, criterias }) => {
  const router = useRouter()
  const [scores, setScores] = useState([]);
  const handleInputChange = useCallback(
    (altIndex, critIndex, value) => {
      const alternativeId = alternatives.data[altIndex].id;
      const criteriaId = criterias.data[critIndex].id;

      const updatedScores = [...scores];
      const scoreIndex = updatedScores.findIndex(
        (score) =>
          score.alternativeId === alternativeId &&
          score.criteriaId === criteriaId
      );

      if (scoreIndex !== -1) {
        // Update existing score
        updatedScores[scoreIndex] = {
          alternativeId,
          criteriaId,
          score: parseFloat(value.toString().replace(',','.')),
        };
      } else {
        // Add new score
        updatedScores.push({
          alternativeId,
          criteriaId,
          score: parseFloat(value.toString().replace(',','.')),
        });
      }

      setScores(updatedScores);
    },
    [alternatives.data, criterias.data, scores]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = [...scores];
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}` + "/score", {
        method: 'POST',
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.log(error)
    }
    console.log(data)
    router.push('/score')
  };

  return (
    <div className="overflow-x-auto">
      <form className="form" onSubmit={handleSubmit}>
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
        <div className="flex flex-row">
          <div className="ms-auto pt-4">
            <button className="btn btn-neutral">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ScoreList;
