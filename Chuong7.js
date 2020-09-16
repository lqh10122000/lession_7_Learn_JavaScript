/*
// video 5  : Blocks and IIFEs
var testFunction = function () {
    var FirstName = 'Huy';

    console.log('abc');
    if (FirstName === 'Huy') {
        var test2 = 'dang test';
        let lastName = 'Le Quang '
        const test = 3;

    }
    console.log(test2);
    console.log(lastName);
    console.log(FirstName);
    console.log(test);
}
testFunction();




// video 6 : string in ES6

var FirstName = 'Huy';
var LastName = 'Le Quang ';

// ES5

console.log('my name is ' + FirstName);

//ES6

console.log(`my name's ${LastName}${FirstName}`);
var x = `${LastName}${FirstName}`;
console.log(x.startsWith('H'));
console.log(`${FirstName} ${LastName}`.repeat(4));






// video 7 : arrow function basic 

const years = [1990, 2001, 2003, 2004];


//ES5
var ages5 = years.map(function(el){
    return 2020 - el;
});
console.log(ages5);

// ES6

var ages6 = years.map(el => 2020 - el);

console.log(ages6);





// video 8:  arrow function lexical "this" keyword

var friends = ['Bod', 'Jane', 'Mark'];
function person(name)
{
    this.name = name;
};

// ES5
person.prototype.myFriends5 = function(friends)
{
    var arr = friends.map(function(el)
    {
        return this.name + 'is friend of ' + el;
    }.bind(this));

    console.log(arr);
}
new person('Quang ').myFriends5(friends);
var huy = new person('Huy ').myFriends5(friends);

//ES6
person.prototype.myFriends6 = function(friends)
{
    var arr = friends.map(el =>
        `${this.name} is friend of ${el}`);

    console.log(arr);
}
new person('Le ').myFriends6(friends);







// video 9 : Destructuring

//ES5
var Huy = ['Quang Huy', 20];
var name = Huy[0];
var Age = Huy[1];


// ES6
const [Name, age] = ['Quang Huy', 20]; 
const obj = {
    FirstName: 'Huy',
    LastName : 'Le Quang '
}
const {FirstName, LastName} = obj;
console.log(FirstName);
console.log(LastName);
const {FirstName: a, LastName : b} = obj;
console.log(a);
console.log(b);

function calculateAgeRetirement(year)
{
    const age = new Date().getUTCFullYear() - year;
    return [age, 65 - age];
}

const [Age6, retirement] = calculateAgeRetirement(1990);
console.log(Age6);
console.log(retirement);




//video 10 : array in ES6 ES2015

var ages = [12, 14, 17, 10, 43, 24];

// ES5

var full = ages.map(function(cur)
{
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));





// video 11 the spread operator

function addFourAges (a, b, c, d)
{
    return a + b + c + d;
}

// ES5
var ages = [12, 14, 78, 21];
var sum1 = addFourAges.apply(null, ages);
console.log(sum1);

// ES6    Important
var sum2 = addFourAges(...ages);
console.log(sum2);
const familySmith = ['Huy', 'Le', 'Quang'];
const familyJane = ['Hoang', 'Huy', 'Pham'];
const bigFamily = [...familySmith,...familyJane];
console.log(bigFamily);






// video 12 rest parameters


//ES5
function isFullAge()
{
    var a = Array.prototype.slice.call(arguments);
    console.log(a);
    
}

isFullAge(1990, 2000, 2001);

//ES6
function isFullAges6(limit, ...year)
{
    year.forEach(cur => console.log(cur >= limit));
    console.log(year);
}

isFullAges6(2000, 1990, 2000, 2001);





// video 14 : Maps

var question = new Map();

question.set('question', 'what is my name ?');
question.set(1, 'Quang');
question.set(2, 'Huy');
question.set(3, 'Hoang');
question.set(4, 'Nam');
question.set('correct', 2);
question.set(true, 'correct answer :D');
question.set(false, 'Wrong, please try again :('); 


for (let [key, value] of question.entries())
{
    if(typeof(key) === 'number')
    {
        console.log(`Answer ${key} : ${value}`);
    }
}

const ans = parseInt(prompt('write the correct answer'));

console.log(question.get(ans === question.get('correct')));








// video 15 classes


//ES5
var Person5 = function(name, yearOfBirth, job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function()
{
    
    var age = new Date().getUTCFullYear() - this.yearOfBirth;
    console.log(age);
}
var Huy = new Person5('huy', 2000, 'Student')
Huy.calculateAge();

// ES6

class Person6
{
    constructor(name, yearOfBirth, job)
    {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge()
    {
        var age = new Date().getUTCFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting()
    {
        console.log('Hello Quang Huy');
    }

}

var Huy6 = new Person6('Huy', 2000, 'Student');
 
Huy6.calculateAge();
Person6.greeting()





//  video 16 : classes  with Subclasses 


//ES5
var Person5 = function(name, yearOfBirth, job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function()
{
    
    var age = new Date().getUTCFullYear() - this.yearOfBirth;
    console.log(age);
}
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals)
{
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function()
{
    this.medals++;
    console.log(this.medals);
}
var Huy = new Athlete5('huy', 2000, 'Student', 3, 10);
Huy.calculateAge();
Huy.wonMedal();



// ES6
class Person6
{
    constructor(name, yearOfBirth, job)
    {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge()
    {
        var age = new Date().getUTCFullYear() - this.yearOfBirth;
        console.log(age);
    }

   
}


class Athlete6 extends Person6
{
    constructor(name, yearOfBirth, job, olympicGames, medals)
    {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this. medals = medals;
    }

    wonMedal()
    {
        this.medals++;
        console.log(this.medals);
    }
}

var Huy6 = new Athlete6('Huy', 2000, 'Student', 5, 5);
Huy6.calculateAge();
Huy6.wonMedal();






// video 18 : coding challenge 8 solution
// ES6
class Element
{
    constructor(name, yearBuild)
    {
        this.name = name;
        this.yearBuild = yearBuild;
    }
}

class Park extends Element
{
    constructor(name, yearBuild, numTrees, area)
    {
        super(name, yearBuild);
        this.numTrees = numTrees;
        this.area = area;
    }

    treeDensity()
    {
        const density = this.numTrees / this.area;
        console.log(`name of this park is ${this.name} and year build ${this.yearBuild} and have ${this.numTrees} and this area is ${this.area}`);
    }

}

class street extends Element
{
    constructor(name, yearBuild, length, size)
    {
        super(name, yearBuild);
        this.length = length;
        this.size = size;
    }

    classifyStreet()
    {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name} build in ${this.yearBuild} is a ${classification.get(this.size)} street`);
    }
}



const allPark = [new Park('Gia Dinh', 2000, 2000, 2), new Park('Thanh Da', 1999, 1500, 0.7)];

const allStreet = [new street('Pham Van Dong', 1998, 32, 3), new street('Kha Van Can', 1973, 50, 2)];


function cal(arr)
{
    const sum = arr.reduce((pre, cur, index ) => pre + cur, 0); 
    return [sum, sum / arr.length]; 
}



function reportPark(p)
{
    console.log('-------- REPORT PARK --------');
    p.forEach(el => el.treeDensity());


    // Average Age
    const age = p.map(el => new Date().getFullYear() - el.yearBuild);
    const [totalAge, avgAge] = cal(age);
    console.log(`our ${p.length} park have avenge ${avgAge}`)


    // which park has more than 1000 trees 
    const trees = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(trees);
    console.log(`${p[trees].name}  has tree greater than 1000 tree `)
}

function reportStreet(s)
{

}


reportPark(allPark);
reportStreet(allStreet);

*/