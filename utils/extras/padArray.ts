export function padArrayLeft<T>(array: T[], targetLength: number, paddingValue: T): T[] {
  const paddingNeeded = targetLength - array.length;

  if (paddingNeeded <= 0) {
    return array;
  }

  const paddingArray = new Array(paddingNeeded).fill(paddingValue);
  return [...paddingArray, ...array];
}

export function padArrayRight<T>(array: T[], targetLength: number, paddingValue: T): T[] {
  const paddingNeeded = targetLength - array.length;

  if (paddingNeeded <= 0) {
    return array;
  }

  const paddingArray = new Array(paddingNeeded).fill(paddingValue);
  return [...array, ...paddingArray];
}