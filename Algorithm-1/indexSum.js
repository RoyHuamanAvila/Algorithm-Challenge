"use strict";
exports.__esModule = true;
exports.indexSum = void 0;
var numsExample = [2, 7, 11, 15];
var targetExample = 9;
var indexSum = function (nums, target) {
    var currentIndex = 0;
    var sumNums = 0;
    var outputIndex = [0, 0];
    while (currentIndex < nums.length && sumNums != target) {
        for (var i = 0; i < nums.length; i++) {
            if (i != currentIndex) {
                sumNums = nums[currentIndex] + nums[i];
            }
            if (sumNums === target) {
                outputIndex = [currentIndex, i];
                return outputIndex;
            }
        }
        currentIndex++;
        console.log(outputIndex);
    }
    return [0];
};
exports.indexSum = indexSum;
(0, exports.indexSum)(numsExample, targetExample);
