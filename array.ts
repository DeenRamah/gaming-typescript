const names: string [] =[];
names.push("Dylan");
console.log(names);//return Dylan

//push is used to add

const letters: readonly string[] = ["Peter"];
letters.push("mkuu");// readonly prevents someone from changing the names
console.log(letters);


const numbers = [1,2,3];
numbers.push(4,5,6);
 console.log(numbers);

 let head: number = numbers[0];

 console.log(head);

 // a tuple is a typed array with a pre-defined length for each index
 let ourTuple:[number, boolean, string];
 ourTuple = [5, false. 'coding'];
 console.log(ourTuple);

 ourTuple.push('Somethimg personal');
 console.log(ourTuple);


const ourReadonluTuple :readonly[number, boolean, string] = [5, true, 'Boom'];
ourReadonluTuple.push('one day off');
console.log(ourReadonluTuple);

//named tuples 
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);

const skee:[number, number] = [55.2, 41.3];
const[x,y] = skee;
console.log(skee);

//numeric enum is a type that will aways start with array of ,a nd its unchangeble
// so you can't run the first number after assigning it

enum CardinalDirections{
    North,
    East,
    South,
    West
}
console.log(CardinalDirections.North);// throws an axception since North is in array 0 so you have to initialize with 1 for it to be displayed

enum CardinalDirec{
    North =1 ,
    East,
    South,
    West
}
console.log(CardinalDirec);


// enums fully initialized
enum StatusCodes{
    NotFound = 400,
    Success = 200,
    Accepted = 203,
    BadRequest = 200
}

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Accepted);

//string enums

enum Cardinals{
    North = 'North',
    South = "South",
    East = "East",
    West ="West"

}

console.log(Cardinals.East);
console.log(Cardinals.South);

//interfaces are similar to Aliass exceptthey only apply to object types

interface Rectangle {
    height : number,
    width: number
}
 const rectangle: Rectangle ={
    height: 20,
    width: 34
 };

 console.log(rectangle);

 //extended interfaces - creating a new interface with the same propersties as the original , plus something else

 interface Squire {
    height: number,
    width: number
 }

 interface Coloredrectangle extends Squire {
    color: string
 }

 const Coloredrectangle: Coloredrectangle ={
    height:20, 
    width: 10,
    color: "red"

};
console.log(Coloredrectangle);

//union is used when a value has more than a single data type. 

function printStatusCode(code: string| number){
    console.log(`My code is ${code}`);
}
printStatusCode(404);
printStatusCode("404");