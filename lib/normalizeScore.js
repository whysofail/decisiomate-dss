const normalizeScores = (data) => {
  const maxScores = {};
  const minScores = {};

  data.forEach((item) => {
    const { criteriaId, score, criteria } = item;
    const { type } = criteria;

    if (type === "Benefit") {
      if (!maxScores[criteriaId] || score > maxScores[criteriaId]) {
        maxScores[criteriaId] = score;
      }
    } else if (type === "Cost") {
      if (!minScores[criteriaId] || score < minScores[criteriaId]) {
        minScores[criteriaId] = score;
      }
    }
  });

  const normalizedData = data.map((item) => {
    const { score, criteriaId, criteria } = item;
    const { weight, type } = criteria;

    let normalizedScore;

    if (type === "Benefit") {
      normalizedScore = score / maxScores[criteriaId];
    } else if (type === "Cost") {
      normalizedScore = minScores[criteriaId] / score;
    }

    return {
      ...item,
      normalizedScore,
    };
  });

  return normalizedData;
};

export default normalizeScores;
