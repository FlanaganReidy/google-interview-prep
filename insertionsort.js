//Based on pseudocode from Introduction to Algorithms 3rd edition

//Let's look at this like we are sorting playing cards in our hand.
//We have cards 2 to 10 we want to be in order after having been dealt.


let ourArray = [4,3,5,9,10,6,7,8,2];


function insertionSort(array){

for (let j = 1; j<array.length; j++){
  let cardInHand = array[j] //we start with the second to left most card and move right
  console.log("this is the card in our hand" + key);
  let i = j-1; //this is the card immediately to the left of the card in our hand
  while(i>=0 && array[i]>cardInHand){
    console.log("our shifting array as we sort" + array);
    array[i+1] = array[i]; //this moves evreything over to the right by one
    i--;
  }
  //once everything has been moved over to the right, we set the card in our hand
  //to it's spot in the array
  array[i+1]=cardInHand;
  }

  console.log(array);
}

insertionSort(ourArray);
