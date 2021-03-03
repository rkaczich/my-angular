import { Component } from '@angular/core';
// import own classes
import { Product } from '../model/product';
// import own interface
import { ProductAttribute } from '../model/productAttribute';


const subtitleContent = "Überblick über Angular";
const saveButtonTitle = "Abspeichern";
// wrong assignment
//saveButtonTitle = "huhu";

// object constant
const user = {name: "Herbert", email: "herbert@irgendwas.de"};
user.name = "Franz";

// array constant
const list = [1,2,3];
list.push(4);
list.shift();

// mixed typed arrays
const mixedList = [
  0,
  "Hallo",
  {name: "Hugo", email: "hugo@irgendwas.de"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variablen, properties
  title = 'Welcome to my Angular';
  // string variable
  subtitle:string = subtitleContent;
  // number variable
  version:number = 1.1
  // boolesche variablen
  isCurrentVersion:boolean = true
  // any variable
  value:any;
  // object variable assigned from constants
  user = user;
  // mixed array assignment
  mixedList = mixedList;
  // class (object instance) variable
  //employee : Employee = new Employee("Herbert", "Peter");

  product : Product = new Product("P2", "Käsemesser");


  text:string;
  // constructor
  constructor(){
    console.log("Aktuelle Version:", this.isCurrentVersion);

    this.value = 2;
    console.log("ANY:", this.value);

    // array constant
    console.log(list);

    // console.log(this.employee);
    // this.employee.logout();
    // console.log("GETTER: ", this.employee.fullname);
    //
    // this.employee.fullname = "Franz";
    // console.log("GETTER: ", this.employee.fullname);

     let p1 = new Product("P1", "Reibe");
     console.log(p1);
     console.log(this.product);

     const productAttribute : ProductAttribute = { id: "pa1", name:"Weight", description: "Gewicht in kg"};
     console.log(productAttribute.description);

     // template string
     this.text = `Das Produkt ist ein: ${p1.productName} und wiegt ${productAttribute.name}`;
     console.log(this.text);

     console.log("Add One: " + addOne(1));

     console.log("Anonyme Funktion: " + result(1));

     console.log("Arrow Funktion: " + arrow(1));

     console.log(numbers.filter(value => value%2===0));

     // wrong copy object
     const o1 = {id: 1, value: "Hallo"};
     const copyO1 = o1;
     copyO1.value = "huhu";
     console.log(o1);
     console.log(copyO1);

     // correct copy of object with spread operator
     const copy2 = {...o1};
     copy2.value = "XXXXXXX";
     console.log(o1);
     console.log(copy2);

     // correct array copy
     const numbersArray:Array<number> = [1,2,3,4,5,6,7,8,9,10];
     const arrayCopy1 = [...numbersArray, 11];
     console.log(numbersArray + "  - - - " + arrayCopy1);

    // combine single arguments to an array
     const v1 = 1;
     const v2 = 2;
     const v3 = 3;
     this.collectSingleValuesToArray(v1, v2);

     // zerlegen von array mit dem ...destructor
     const [w1, w2, ...rest] = numbersArray;
     console.log("W1: "+w1);
     console.log("W2: "+w2);
     console.log("Rest: "+rest);

    // zerlegen von objecten
    const o2 = {id: 1, value: "Hallo", name:{id: 17, w:"dddd"}};
    const {id, value, name} = o2;
    console.log(name);




  }
  // methoden
  collectSingleValuesToArray(...args:any[]){
    console.log("Array: "+ args);
  }


}

const numbers = [1,2,3,4,5,6,7,8,9,10];

// arrow fucntion
const arrow = (value:number) => {return value +1;}

// anonyme function
const result = function (value:number) {
  return value + 1;
}

// benannte function
function addOne(value:number){
  return value +1;
}



/**
class Employee{
  private name:string;
  firstname:string;

  constructor(name:string, firstname:string){
    this.name = name;
    this.firstname = firstname;
  }

  get fullname(): string {
    return this.firstname + " " + this.name;
  }

  set fullname(name: string){
    this.name = name;
  }

  getFullname(){
      return this.firstname + " " + this.name;
  }

 logout() : void{
   alert("Abgemeldet...");
 }
}
**/
