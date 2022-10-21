const nth_most_rate = (list, n) => {
  // create an object to have each of the numbers in the list as the 'key' and their number of occurence as the 'value'
  const nth_Checker = {};
  list.forEach((number, index) => {
    let occurenceCount = 0;
    for (const numDuplicate of list) {
      if (numDuplicate != number) continue;
      if (numDuplicate == number) {
        occurenceCount += 1;
        nth_Checker[number] = `Appeared ${occurenceCount} times`;
      }
    }
  });

  // create an array that will contain all the occurences of each number:) i.e the values of the *nth_checker* object
  let nthRaresList = [];
  for (const numberKeys in nth_Checker) {
    if (nthRaresList.includes(nth_Checker[numberKeys])) continue;
    nthRaresList.push(nth_Checker[numberKeys]);
  }

  // sort the array to arrange them in ascending order so that we can easily determine the frequency of occurences in an orderly and efficient way.
  let sortedOccurence = nthRaresList.sort();

  // Now let's select the occurence that is corresponding to the second parameter of the array
  const nthRareOccurence = sortedOccurence[n - 1];

  // Now let's check if there are multiple numbers with same occurence rate provided in the parameter and select them.
  let nthMostRare = [];
  for (let n in nth_Checker) {
    if (nth_Checker[n] !== nthRareOccurence) continue;
    if (nth_Checker[n] == nthRareOccurence) {
      nthMostRare.push(n);
    }
  }

  // Display the final solutions, trust this works with 200% efficiency
  let configText;
  let message = "";
  if (nthMostRare.length == 0) {
    message = `The ${n} most rare in the list is zero, probably because no number in the list appeared upto such times `;
  } else if (nthMostRare.length == 1) {
    message = `The ${n} most rare in the list is ${nthMostRare[0]} `;
  } else if (nthMostRare.length > 1) {
    message = `The ${n} most rare in the list are ${nthMostRare} `;
  }
  console.log(nth_Checker);
  console.log(message);
  return message;
};

nth_most_rate([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 2);
