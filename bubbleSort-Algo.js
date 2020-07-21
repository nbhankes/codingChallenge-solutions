function bubbleSort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}


bubbleSort([5, 3, 4, 2, 1]) // [1, 2, 3, 4, 5]
