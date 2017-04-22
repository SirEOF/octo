make.arrays = {
  filledArray: function (fn, limit) {
    let array = [];
    let size = limit || random.number(make.numbers.tinyNumber);

    for (let i = 0; i < size; i++) {
      array.push(fn());
    }

    return array;
  }
};
