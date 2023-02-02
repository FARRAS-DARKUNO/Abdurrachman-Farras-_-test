/**
 * Question 3
 * Multiple Questions
 * Data of 2 classes are provided. There are some students with their report cards in each class.
 * 
 * You are going to create a function to answer questions provided;
 */

const classA = [
    {
        name: 'Jerry',
        score: {
            math: 95,
            physics: 80,
            biology: 75
        }
    },
    {
        name: 'Andre',
        score: {
            math: 78,
            physics: 65,
            biology: 88
        }
    },
    {
        name: 'Ethan',
        score: {
            math: 80,
            physics: 72,
            biology: 73
        }
    },
    {
        name: 'John',
        score: {
            math: 82,
            physics: 64,
            biology: 93
        }
    },
    {
        name: 'Hansel',
        score: {
            math: 86,
            physics: 77,
            biology: 63
        }
    }
];

const classB = [
    {
        name: 'Emmanuel',
        score: {
            math: 70,
            physics: 96,
            biology: 74
        }
    },
    {
        name: 'Kevin',
        score: {
            math: 65,
            physics: 74,
            biology: 85
        }
    },
    {
        name: 'Chris',
        score: {
            math: 61,
            physics: 80,
            biology: 83
        }
    },
    {
        name: 'Jack',
        score: {
            math: 75,
            physics: 92,
            biology: 83
        }
    }
];

const getMean = (data, subject) => {
    let Tmath = 0
    let Tphy = 0
    let Tbio = 0
    for (let i = 0 ; i < data.length; i+= 1){
        Tmath += data[i].score.math
        Tphy += data[i].score.physics
        Tbio += data[i].score.biology
    }

    if ( subject == 'math') {
        return Tmath / data.length
    }
    if ( subject == 'physics' ) {
        return Tphy / data.length
    }
    if ( subject == 'biology') {
        return Tbio / data.length
    }

    return 0
};

const getMedian = (data, subject) => {
    let Tmath = 0
    let Tphy = 0
    let Tbio = 0
    let themData = []

    for (let i = 0 ; i < data.length; i+= 1){
        for (let j = i ; j < data.length; j+= 1) {
            themData ;
        }
    }

    return 0
}

const getHighest = (data, subject) => {
    let Tmath = 0
    let Tphy = 0
    let Tbio = 0
    for (let i = 0 ; i < data.length; i+= 1){
        if (Tmath >= data[i].score.math) {
            Tmath = data[i].score.math
        }
        if (Tphy >= data[i].score.physics){
            Tphy = data[i].score.physics
        }
        if (Tbio >= data[i].score.biology){
            Tbio = data[i].score.biology
        }
    }

    if ( subject == 'math') {
        return Tmath
    }
    if ( subject == 'physics' ) {
        return Tphy
    }
    if ( subject == 'biology') {
        return Tbio
    }

    return 0
}

const getLowest = (data, subject) => {
    let Tmath = 10000
    let Tphy = 10000
    let Tbio = 10000
    for (let i = 0 ; i < data.length; i+= 1){
        if (Tmath <= data[i].score.math) {
            Tmath = data[i].score.math
        }
        if (Tphy <= data[i].score.physics){
            Tphy = data[i].score.physics
        }
        if (Tbio <= data[i].score.biology){
            Tbio = data[i].score.biology
        }
    }

    if ( subject == 'math') {
        return Tmath
    }
    if ( subject == 'physics' ) {
        return Tphy
    }
    if ( subject == 'biology') {
        return Tbio
    }

    return 0
}

const whoIsTheLowest = (data, subject) => {
    let Tmath = 1000
    let TmathName = ''
    let Tphy = 1000
    let TphyName = ''
    let Tbio = 1000
    let TbioName = ''

    for (let i = 0 ; i < data.length; i+= 1){
        if (Tmath <= data[i].score.math) {
            Tmath = data[i].score.math
            TmathName = data[i].name
        }
        if (Tphy <= data[i].score.physics){
            Tphy = data[i].score.physics
            TphyName = data[i].name
        }
        if (Tbio <= data[i].score.biology){
            Tbio = data[i].score.biology
            TbioName = data[i].name
        }
    }

    if ( subject == 'math') {
        return TmathName
    }
    if ( subject == 'physics' ) {
        return TphyName
    }
    if ( subject == 'biology') {
        return TbioName
    }

    return 0
};

const whoIsTheHighest = (data, subject) => {
    let Tmath = 0
    let TmathName = ''
    let Tphy = 0
    let TphyName = ''
    let Tbio = 0
    let TbioName = ''

    for (let i = 0 ; i < data.length; i+= 1){
        if (Tmath >= data[i].score.math) {
            Tmath = data[i].score.math
            TmathName = data[i].name
        }
        if (Tphy >= data[i].score.physics){
            Tphy = data[i].score.physics
            TphyName = data[i].name
        }
        if (Tbio >= data[i].score.biology){
            Tbio = data[i].score.biology
            TbioName = data[i].name
        }
    }

    if ( subject == 'math') {
        return TmathName
    }
    if ( subject == 'physics' ) {
        return TphyName
    }
    if ( subject == 'biology') {
        return TbioName
    }

    return 0
};

const mathMean = getMean(classA, 'math');
const physicMean = getMean(classA, 'physics');
const biologyMean = getMean(classA, 'biology');

console.log('What is the mean for each subject on class A?');
console.log({
    mathMean,
    physicMean,
    biologyMean
});

const mathMedian = getMedian(classB, 'math');
const physicMedian = getMedian(classB, 'physics');
const biologyMedian = getMedian(classB, 'biology');

console.log('What is the median for each subject on class B?');
console.log({
    mathMedian,
    physicMedian,
    biologyMedian
});

const mathHighest = getHighest(classA, 'math');
const physicHighest = getHighest(classA, 'physics');
const biologyHighest = getHighest(classA, 'biology');

console.log('Which is the highest score in each subject on class A?');
console.log({
    mathHighest,
    physicHighest,
    biologyHighest
});

const mathLowest = getLowest(classB, 'math');
const physicLowest = getLowest(classB, 'physics');
const biologyLowest = getLowest(classB, 'biology');

console.log('Which is the lowest score in each subject in class B?');
console.log({
    mathLowest,
    physicLowest,
    biologyLowest
});

const lowestMath = whoIsTheLowest(classA, 'math');
const lowestPhysic = whoIsTheLowest(classA, 'physics');
const lowestBiology = whoIsTheLowest(classA, 'biology');

console.log('Who got the lowest score in each subject in class A?');
console.log({
    lowestMath,
    lowestPhysic,
    lowestBiology
});