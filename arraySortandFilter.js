Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.

function makeArrayConsecutive2(statues) {
    let lastArrIndex = statues.length - 1;
    let statuesInOrder = statues.sort((a, b) => a - b);
    console.log(statuesInOrder)
    let maxNumInArr = statuesInOrder[lastArrIndex];
        console.log("Max Number in array is: " + maxNumInArr)
    let minNumInArr = statuesInOrder[0]
    console.log("Min Number in array is: " + minNumInArr)
    let newArr = [];
    let missingStatues = []
 
    for (var i = minNumInArr; i < maxNumInArr + 1; i++) {
        newArr.push(i)
            }           
        console.log("Array of missing statues:" + missingStatues)
        console.log("Array of newArr:" + newArr)
 
        newArr = newArr.filter(val => !statues.includes(val))
        console.log(newArr)
            

    return newArr.length
}

