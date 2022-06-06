export const calcAverage = (scores: number[]) =>
  scores.reduce((a, b) => a + b, 0) / scores.length
