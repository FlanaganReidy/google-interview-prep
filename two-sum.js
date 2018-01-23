//based on tutorial from coderbyte.com

//The idea for this problem is that if we are given an array and a sum
//the function we right will output the pairs of numbers who, when added,
//will produce the sum we input

function twoSum(array, sum){
 //since hashmaps have a lookup time of O(1), we can quickly find the item we're looking for
//also this syntax just instantiates a new object
  let hashTable = {};

  //this is where we'll store our answers until we send them out
  let twoSumAnswers = [];

  //loop through the array
  for(i=0;i<array.length;i++){
    let sumMinusCurrent = sum - array[i];
    //hash tables look up string objects, so we have to make sure that's what we're giving it
    if(hashTable[sumMinusCurrent.toString()]!== undefined){
      //we can now add both to the list since they both exist.
      //since it's not important that our array have strings we can just add them in directly here
      twoSumAnswers.push([array[i], sumMinusCurrent]);
    }

    hashTable[array[i].toString()] = array[i];

  }
  // now we send out our array of arrays of pairs.
  return twoSumAnswers;
}

console.log(twoSum([1,5,9,7,3,10,4], 8));
