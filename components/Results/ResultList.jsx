import React from 'react'

const ResultList = ({data}) => {
    const criteriaNames = [...new Set(data.map(item => item.criteria.name))];
    const alternativeNames = [...new Set(data.map(item => item.alternative.name))];
  
    return (
        <div className="overflow-x-auto">
      <table className='table table-zebra'>
        <thead>
          <tr>
            <th>Alternatives</th>
            {criteriaNames.map(criteria => <th key={criteria}>{criteria}</th>)}
          </tr>
        </thead>
        <tbody>
          {alternativeNames.map(alternative => (
            <tr key={alternative}>
              <td>{alternative}</td>
              {criteriaNames.map(criteria => {
                const score = data.find(item =>
                  item.criteria.name === criteria &&
                  item.alternative.name === alternative
                ).score;
                return <td key={criteria}>{score}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
}

export default ResultList