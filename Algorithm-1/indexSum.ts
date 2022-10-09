const numsExample: number[] = [2,7,11,15];
const targetExample: number = 9;

export const indexSum = (nums: number[], target: number): number[] => {
    let currentIndex: number = 0;
    let sumNums: number = 0;
    let outputIndex: number[] = [0, 0];

    while (currentIndex < nums.length && sumNums != target) {
    for(let i = 0; i < nums.length; i++){
        if(i != currentIndex){
            sumNums = nums[currentIndex] + nums[i];
        }
        if(sumNums === target) {
            outputIndex = [currentIndex, i];
            return outputIndex;
        }

    }
    currentIndex++;
    console.log(outputIndex);
    }

    return [0];
}

indexSum(numsExample,targetExample);

export{};



