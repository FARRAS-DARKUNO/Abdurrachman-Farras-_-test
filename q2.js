/**
 * Question 2
 * Create a function to find m players in n football club have (No loop, no multiplication);
 * 
 * Lets assume that there are 11 players for each club.
 */
const testCase = [
    {club: 5, totalPlayers: 55},
    {club: 0, totalPlayers: 0},
    {club: 500, totalPlayers: 5500},
    {club: 16, totalPlayers: 176},
    {club: 2125, totalPlayers: 23375}
];

const players = 11;


for (let i = 0 ; i< testCase.length; i+= 1){
    if(testCase[i].totalPlayers / testCase[i].club == players){
        console.log("passed")
    }
    else{
        console.log("fail")
    }
}
