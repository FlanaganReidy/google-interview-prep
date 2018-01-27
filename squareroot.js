// here we're going to try to write a function that, when given a number, will return
//that number's square root


//so we know that this is a function and that it takes in a single parameter,
//that is the square whose squarroot we want to find
function squareRootFn(square){

    //we're going to be guessing at what the squareroot is
    let guess = square/3;

    while(square/guess !== guess){
      guess = ((square/guess)+ guess)/2
      }
    return guess;

    }
//not sure how to calculate the big O of this.
//I think this O(n)
console.log(squareRootFn(16));
