import React from "react";

const ResultList = ({ data, inner }) => {
  const alternativeNames = [
    ...new Set(data.map((item) => item.alternative.name)),
  ];
  const criteriaIds = [...new Set(data.map((item) => item.criteriaId))];
  const criteriaNames = [...new Set(data.map((item) => item.criteria.name))];

  // Group the data by alternativeId
  const groupedData = {};
  data.forEach((item) => {
    const alternativeId = item.alternativeId;
    if (!groupedData[alternativeId]) {
      groupedData[alternativeId] = {
        alternative: {
          id: alternativeId,
          name: item.alternative.name
        },
        scores: {},
      };
    }
    groupedData[alternativeId].scores[item.criteriaId] = {
      id: item.criteriaId,
      name: item.criteria.name,
      score: item.score,
    };
  });

  return (
    <div className="overflow-x-auto drop-shadow-lg">
      <h1 className="text-lg">Original Data</h1>
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
          {Object.values(groupedData).map((group) => (
            <tr key={group.alternative.name}>
              <td>{group.alternative.name}</td>
              {criteriaIds.map((criteriaId) => (
                <td key={criteriaId}>{group.scores[criteriaId].score}</td>
              ))}
              <td className="flex flex-row ml-auto gap-3 w-fit">
                {!inner
                  ? ""
                  : Object.entries(inner).map(([key, Component]) => (
                      <Component key={key} {...group} />
                    ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultList;
