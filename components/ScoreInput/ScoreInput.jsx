import React from 'react'
import ScoreList from './ScoreInputList';
const getAlternatives = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}` + "/alternatives", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  };
  
  const getCriterias = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}` + "/criterias", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  };

const ScoreInput = async () => {
    const alternatives = await getAlternatives()
    const criterias = await getCriterias()
  return (
    <div>
      {alternatives.length > 0 ? 'Data empty' :
      
        <ScoreList alternatives={alternatives} criterias={criterias}/> 
        }
    </div>
  )
}

export default ScoreInput