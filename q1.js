/**
 * Question 1
 * Create a function to check if it is possible to get the exact length provided with the provided blocks;
 * 
 * Lets assume that there are 2 kinds of block here
 * 1. Small Block: 1x1;
 * 2. Big Block: 5x1;
 * 
 */

const smallBlock = 1;
const bigBlock = 5;

const testCase = [
    {providedSmall: 10, providedBig: 2, totalNeeded: 16},
    {providedSmall: 6, providedBig: 3, totalNeeded: 20},
    {providedSmall: 4, providedBig: 7, totalNeeded: 45},
    {providedSmall: 2, providedBig: 5, totalNeeded: 18},
    {providedSmall: 30, providedBig: 1, totalNeeded: 32},
    {providedSmall: 16, providedBig: 0, totalNeeded: 14},
    {providedSmall: 8, providedBig: 3, totalNeeded: 20},
    {providedSmall: 13, providedBig: 4, totalNeeded: 17},
    {providedSmall: 9, providedBig: 2, totalNeeded: 14},
    {providedSmall: 2, providedBig: 1, totalNeeded: 3},
    {providedSmall: 3, providedBig: 4, totalNeeded: 19},
    {providedSmall: 7, providedBig: 3, totalNeeded: 16},
    {providedSmall: 1, providedBig: 6, totalNeeded: 12},
    {providedSmall: 15, providedBig: 3, totalNeeded: 25}
];


    for (let i = 0; i < testCase.length; i+= 1){
        if (testCase[i].providedSmall *smallBlock + testCase[i].providedBig * bigBlock == testCase[i].totalNeeded){
            console.log('Possible')
        }
        else{
            console.log('Impossible')
        }
    }


