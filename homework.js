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