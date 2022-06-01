//We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

//paremeters: array of positive and negative integers
//postive and negative integers collide
//when they collide , take the absolute value of each . the larger number wins and can be added to the stack/ output
//the smaller one disappears and needs to be popped off the asteroid array
//if two consecutive numbers are positive, they don't collide
//there can be consecutive collisions.
//if both values are the same but signs are opposite, both get popped
//if the last item in the stack is the one that would loose, it gets erased / popped off

// Loop through the array.
// Check if a collision is possible (current value is negative, and the previous item is positive).
// If a collision is possible, compare the absolute value of both elements.
// If the current value is smaller, don’t add it to the stack, and remove the previous item from the stack.
// If the current value is equal to the previous value, don’t add it to the stack.
// If the current value is bigger, remove the previous item from the stack, and add the current value to the stack.
// Do the above in a while loop because collisions can occur one after another. While loop is best becuase we don't know how mnay times we'll have to continously evluate our previous asteroid for more collisions
// If collision not possible, add the item to the stack.
// Return stack.

///------- SOLUTION using STACK --------////

let asteroids = [10, 5, -5];

function asteroidCollision(asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let add = true;
    console.log(stack, 'stack at first');
    //check if collision is possible
    if (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
      while (stack.length !== 0 && stack[stack.length - 1] > 0) {
        if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length - 1])) {
          stack.pop();
        } else if (
          Math.abs(asteroids[i]) === Math.abs(stack[stack.length - 1])
        ) {
          stack.pop();
          add = false;
        } else {
          add = false;
        }
        if (!add) break;
      }
    }
    if (add) stack.push(asteroids[i]);
  }

  console.log(stack);
  return stack;
}

asteroidCollision(asteroids);
