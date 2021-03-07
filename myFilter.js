Array.prototype.myFilter = function(callback) {
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

//for test purposes
var s = [23, 65, 98, 5];

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);
