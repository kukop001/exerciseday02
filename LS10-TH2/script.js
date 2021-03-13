function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(array) {
    var max = array[0];
    for (let i = 1; i < array.length; ++i) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}


var num = [];
for (var i = 0; i < 20; i++) {
    num[i] = Math.floor(Math.random() * 101);
}

document.write(num.join());
var minValue = findMin(num);

document.write("<br/>");
document.write("<br/>");
document.write("The minimum value is: " + minValue);

var maxValue = findMax(num);
document.write("<br/>");
document.write("The maximum value is: " + maxValue);


