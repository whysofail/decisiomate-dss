import React from 'react'
import ScoreList from './ScoreList';
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

const Score = async () => {
    const alternatives = await getAlternatives()
    const criterias = await getCriterias()
  return (
    <div>
        <ScoreList alternatives={alternatives} criterias={criterias}/> 
    </div>
  )
}

export default Score