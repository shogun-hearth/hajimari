export const titleCase = (input: string): string => {
  // split input into array of words 
  const words = input.split(' ');

  /**
   * 1. map over the array to capitalize the first letter
   * 2. reduce to a single concatenated string
   * 3. trim white space at the end
   * */
  const result = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .reduce((result, word) => `${result} ${word}`)
    .trim();

  return result;
};