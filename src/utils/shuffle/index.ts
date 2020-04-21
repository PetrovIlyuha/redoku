/**
 * An array shuffling the Fischer-Yates shuffle algorithm
 * @param array An array to be shuffled
 */

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]];
  }
  return array;
}

export default shuffle;
