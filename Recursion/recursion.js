let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
    //this serves as a base case
    //once the counter is larger than 3 , exit and return done
    //the return value will be undefined because
  }
  counter++;
  return inception();
  //adding the return here is what we need to make sure the value gets bubbled up to the top of the stack and doesn't return undefined.
  console.log('hello');
}

inception();

//there is a base case
//always want to return so that the value you want will get bubbled up to the top

//1. identify base case
//2. identify the recursive case
//3. Get close and closer and return when needed
//usually you have return twice
//return in the base case
//return the recursive function /case

//function gets closer to base case and once it gets there it pops the functions off the stack
