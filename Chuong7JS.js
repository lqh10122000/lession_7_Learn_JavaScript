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