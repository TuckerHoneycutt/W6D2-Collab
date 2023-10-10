function ageSort(users) {
  // Your code here

  //We want to compare all the ages from the users object
  //Return them in ascending order

  return users.sort((a,b) => a.age - b.age)
}

function oddEvenSort(arr) {
  // Your code here


  //Separating the odd and even number of the array using the .filter method
  const odd = arr.filter(num => num % 2 !== 0)
  const even = arr.filter(num => num % 2 === 0)
  //Returning a concatenated array of odd and even numbers sorting using a spread operator
  return[...odd.sort((a,b) => a - b), ...even.sort((a,b) => a - b)]
}

function validAnagrams(s, t) {
  // Your code here

  //Define an S string sort
  //Define a T string stort

  //If S === T (regardless of order) return true

  const sortedS = s.split('').sort().join('')
  const sortedT = t.split('').sort().join('')
  return sortedS === sortedT
}

function reverseBaseSort(arr) {
  //Compare the lengths of a and b
  //
  return arr.sort((a, b) =>{
    if(a.toString().length === b.toString().length){ //Compare the lengths to make sure they're the same base
      return a - b; //If they are then ascending
    }else{
      return b - a; //else descending base off the base
    }
  })
}

const arr1 = [11, 1, 101, 10, 100]; //100, 101, 10, 11, 1
const arr2 = [1, 45, 164, 6, 31, 90, 671]; //164, 671, 31, 45, 90, 1, 6

console.log(reverseBaseSort(arr1))
console.log(reverseBaseSort(arr2))

function frequencySort(arr) {
  // Your code here

  //Count the frequency of each number in the array
  //Sort the array based on the frequency and then values using sort method

  const frequencyMap = {} //Frequency map

  //Checks how frequent they occur
  for(let i = 0; i < arr.length; i++){
    if(!frequencyMap[arr[i]]){
      frequencyMap[arr[i]] = 1;
    }else{
      frequencyMap[arr[i]]++
    }
  }


  //Logic to determine the order using sort method
  return arr.sort((a,b) => {
    if(frequencyMap[a] !== frequencyMap[b]){
      return frequencyMap[a] - frequencyMap[b]
    }else{
      return b - a
    }
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
