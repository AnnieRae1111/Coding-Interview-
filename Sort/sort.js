const letters = ['a', 'b', 'z', 'x', 'l'];
const basket = [2, 65, 34, 2, 7, 8];

letters.sort();
basket.sort();

//when sorting numbers, javascript sort() method converts them to strings first

'65'.charCodeAt(0);
//you will get 54 returned
//54 is unicode
//unicode is how charcters are sorted in computers
// 65 at index 0 is 6 and unicode is 54 for 6

//Javascript standard ECMA SCRIPT: governing body of how things should be, but not always.

//to sort numbers correctly need to do this:
basket.sort((a, b) => {
  return a - b;
});

//how methos are implemented depends on the browser / javascript engine
//chrome browser uses a different javascript implemenation
//the sort alogorithm that is used underneath the hood is dependenant on the browswer it is implemented in

//letters in differnet languages that have accents on them can cuase sort to not work correctly as the unicode character is not for the actual a but for that a with the accent

const spanish = ['único', 'árbol', 'cosas', 'fútbol'];

spanish.sort(); // doesn't give you the write answer

spanish.sort(function (a, b) {
  return a.localeCompare(b);
  //this allows us to compare if in different languages
});
