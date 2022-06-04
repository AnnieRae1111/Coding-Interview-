const array = [99, 44, 6, 2, 1, 6, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    console.log(array[i], 'i');
    for (let j = 0; j < length; j++) {
      console.log(j, 'j');
      if (array[j] > array[j + 1]) {
        //swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(array);
