 function get2en3thLargest (array) {
    const newArray = array.slice();
    newArray.sort(function (x, y) {
        return x - y;
    });
    return [newArray[1], newArray[2]];
};


module.exports = get2en3thLargest;