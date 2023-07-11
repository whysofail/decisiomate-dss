const calculateWeights = (normalizedData) => {
    const weightedScores = {};
  
    normalizedData.forEach((item) => {
      const { alternative, criteria, normalizedScore } = item;
      const alternativeName = alternative.name;
      const criteriaName = criteria.name;
      const weight = criteria.weight;
  
      if (!weightedScores[alternativeName]) {
        weightedScores[alternativeName] = {};
      }
      
      weightedScores[alternativeName][criteriaName] = normalizedScore * (weight / 100);
    });
  
    return weightedScores;
  };
  
  export default calculateWeights;
  