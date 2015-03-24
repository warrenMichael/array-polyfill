
// console.log(testArray)

var testArray = ['alternative metal', 'black metal', 'death metal', 'doom metal', 'folk metal', 'industrial metal', 'power metal', 'progressive metal', 'thrash metal'];

var filteredArray = testArray.filter(function (value, index, array) {
  return (value.indexOf('black') > -1);
});

var mapArray = testArray.map(function (value, index, array) {
  return ('instrumental ' + value);
});

console.log('filteredArray', filteredArray);

console.log('mapArray', mapArray);


if (Array.prototype.filtertest) {
  console.log('filter supported');
} else {
  console.log('filter NOT supported');
  Array.prototype.filtertest = function (callback) {
    var newArray = [];
    var array = this;
    var i;
    for (i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
};



var newTestFilterArray = testArray.filtertest(function (value, index, array) {
  return (value.indexOf('black') > -1);
});

console.log('original array', testArray);
console.log(newTestFilterArray);

if (Array.prototype.mapp) {
  console.log('map supported')
} else {
  console.log('map NOT supported')
  Array.prototype.mapp = function (callback) {
    var newArray = [];
    var array = this;
    var i;
    for (i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this))
    }
    return newArray;
  };
}

var newTestMapArray = testArray.mapp(function (value, index, array) {
  return ('instrumental ' + value);
});

console.log('original array', testArray);
console.log(newTestMapArray);

// if (Array.prototype.forEach) {
//   console.log('forEach supported')
// } else {
//   console.log('forEach NOT supported')
// }

// if (Array.prototype.every) {
//   console.log('every supported')
// } else {
//   console.log('every NOT supported')
// }

// if (Array.prototype.some) {
//   console.log('some supported')
// } else {
//   console.log('some NOT supported')
// }

// if (Array.prototype.reduce) {
//   console.log('reduce supported')
// } else {
//   console.log('reduce NOT supported')
// }

// if (Array.prototype.reduceRight) {
//   console.log('reduceRight supported')
// } else {
//   console.log('reduceRight NOT supported')
// }

