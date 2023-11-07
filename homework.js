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
  