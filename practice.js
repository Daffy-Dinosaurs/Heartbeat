var heights = [2, 0, 4, 1, 2, 3];

var waterPool = function (array) {
  var storage = [];

  var subset = [];

  var subRoutine = function (sub, newStart) {

    var internalStorage = [];
    var startPoint = 0;
    var endPoint = 0;

    for (var i = 0; i < sub.length; i++) {
      startPoint = newStart || sub[0];

      if (sub[i] > startPoint && sub[i] > endPoint) {
        endPoint = array[i];

        // subset = array.slice(1, i);
        newStart = endPoint;
        newArr = array.splice(i + 1, array.length);
        console.log('this is the splice array', newArr);
        subRoutine(newArr, newStart);
      }

    }

    console.log('one pass');
    var max = startPoint * (newArr.length + 1);
    console.log(startPoint, newArr.length, 'and this is their product', max);

  };

  subRoutine(array);

  //
  // for (var j = 0; j < subset.length; j++) {
  //   // console.log('hey');
  // }

};

waterPool(heights);

//results = [2, 3]
