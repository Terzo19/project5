//Whale talk 

// Transforming a quote from english to a 'whale' language where there are only vowels  and The u‘s and e‘s are extra long, so we must double them in our program.

let input = "You lose 100% of the chances you don't take";

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for(let i=0 ; i<input.length ; i++){
  //console.log(i);
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  }
  if(input[i]==='u'){
    resultArray.push(input[i]);
  }
  for(let j=0 ; j<vowels.length ; j++){
    if(input[i] === vowels[j]){
      resultArray.push(vowels[j]);
    }  
  }
}

console.log(resultArray);

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);
