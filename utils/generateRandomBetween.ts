export const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number,
): number => {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) {
    return generateRandomBetween(min, num, exclude);
  }

  return num;
};
