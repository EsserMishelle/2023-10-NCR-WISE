/*Hamster
attributes:

owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price  */

class Hamster {
    constructor(owner, name, price){
        this.owner = " ";
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log(`squeak squeak`)
    }
    eatFood() {
        console.log('nibble nibble')
    } 
    getPrice() {
        return this.price;
    }
  }
  
  const chunky = new Hamster ('Mishelle','Chunky', 7)//instantiating Chunky hamster
  
  console.log(chunky)
  //Hamster {owner: ' ', name: 'Chunky', price: 15} //price didn't change
  
  chunky.owner = "Mishelle";
  console.log(chunky);//Hamster {owner: 'Mishelle', name: 'Chunky', price: 15}
  chunky.price = 7;
  console.log(chunky);//Hamster {owner: 'Mishelle', name: 'Chunky', price: 7}
  console.log(chunky.getPrice()); //7
  
  /*Person
attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:

getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())  */

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name =name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters =[];
        this.bankAccount = 0;
    }
  
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log('Howdy, I am ${this.name}');
    }
    eat() {
        this.weight+=1;
        this.mood +=1;
    }
  
    exercise() {
        this.weight --;
    }
    ageUp() {
        this.age++;
        this.weight++;
        this.height++;// improvised by me because we should increase the height
        this.mood--;
        this.bankAccount+=10;
    }
    
    buyHamster(newHamster) {//passing the whole hamster obj
        this.hamsters.push(newHamster.name);//pushing just the name
        this.mood+= 10;
        this.bankAccount = this.bankAccount - newHamster.getPrice()//get obj.price
    }
  }
  
  ///*1) Instantiate a new Person named Timmy
const timmy = new Person ('Timmy');///instiating the timmy person
console.log(timmy);
//Person {
//   name: 'Timmy',
//   age: 0,
//   height: 0,
//   weight: 0,
//   mood: 0,
//   hamsters: [],
//   bankAccount: 0
// }

timmy.ageUp();////2)aging Timmy to 5 years old
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy);
// Person {
// name: 'Timmy',
// age: 5,
// height: 5,
// weight: 5,
// mood: -5,
// hamsters: [],
// bankAccount: 50
// }

//3)At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
console.log(timmy);
// Person {
//   name: 'Timmy',
//   age: 5,
//   height: 5,
//   weight: 10,
//   mood: 0,
//   hamsters: [],
//   bankAccount: 50
// }

//Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times

timmy.exercise();//Timmy exercises 5 times
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
console.log(timmy);
// Person {
//   name: 'Timmy',
//   age: 5,
//   height: 5,
//   weight: 5,
//   mood: 0,
//   hamsters: [],
//   bankAccount: 50
// }


timmy.ageUp(); //Age Timmy 9 years
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy);
// Person {
//   name: 'Timmy',
//   age: 9,
//   height: 9,
//   weight: 9,
//   mood: -4,
//   hamsters: [],
//   bankAccount: 90
// }
console.log(timmy.bankAccount); //90


//Create a hamster named "Gus"
const gus = new Hamster('Timmy', 'Gus', 20) ;//instantiate Gus the hamster
console.log(gus);//Hamster{owner:'',name:'Gus',price:15}--owner/price not updated
gus.owner = 'Timmy';//Set Gus's owner to the string "Timmy"

console.log(gus.owner)//Timmy -- explicitely reassigning the owner
console.log(gus.price)//15 -- we didn't change it, so it's default $15

timmy.buyHamster(gus);//Timmy buys Gus. Money's subtracted from bank acct
console.log(timmy.hamsters)//['Gus']
console.log(timmy.bankAccount)//75

timmy.ageUp();//Age Timmy 15 years
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();

timmy.eat();//Have Timmy eat twice
timmy.eat();

timmy.exercise();//Have Timmy exercise twice
timmy.exercise();

console.log(timmy);
// //Person {
//   name: 'Timmy',
//   age: 15,
//   height: 15,
//   weight: 15,
//   mood: 2,
//   hamsters: [ 'Gus' ],
//   bankAccount: 135
// }

timmy.buyHamster(chunky);  //buys Chunky from Mishelle. Gave a discount
console.log(timmy.hamsters)//[ 'Gus', 'Chunky' ]
console.log(timmy.bankAccount) //128

console.log(timmy)
// Person {
//   name: 'Timmy',
//   age: 15,
//   height: 15,
//   weight: 15,
//   mood: 12,
//   hamsters: [ 'Gus', 'Chunky' ],
//   bankAccount: 128
// }
