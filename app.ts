/*
Note: Implement the solution of assignment in Typescript 
Class – Toll Booth 
Imagine a tollbooth at a bridge. Cars passing by the booth are expected to pay 50 Rupees 
toll. Mostly they do, but sometimes a car goes by without paying. The tollbooth keeps track 
of the number of cars that have gone by, and of the total amount of money collected. 
Model this tollbooth with a class called TollBooth. The two data items are to hold the total 
number of cars as private static , and to hold the total amount of money collected. 
A constructor initializes both of these to 0. 
A member function called payingCar() increments the car total and adds 50/- to the cash 
total. 
Another function, called nopayCar(), increments the car total but adds nothing to the cash 
total. 
Finally, a member function called display() displays the two totals. 
Make appropriate member functions, make all the member variables as private and define 
the required property procedures. 
create a function and pass n values to the function for testing the above logic e.g 
sample('p','p','n','p','n') 
sample('p','p','n','p','p','n','p') 
sample('p','p','n','p','n','p','p','p','n') 
to test the logic for each input passed to the function. 
*/

class TollBooth {
  private static numberOfCarsPassed: number = 0;
  private static moneyCollected: number = 0;

  constructor() {
    // TollBooth.numberOfCarsPassed = 0;
    // TollBooth.moneyCollected = 0;
  }

  payingCar(): void {
    TollBooth.numberOfCarsPassed++;
    TollBooth.moneyCollected += 50;
  }

  nopayCar(): void {
    TollBooth.numberOfCarsPassed++;
  }

  display(...input: string[]): void {
    input.forEach((el) => {
      if (el === "p") {
        this.payingCar();
      } else {
        this.nopayCar();
      }
    });

    console.log(TollBooth.numberOfCarsPassed);
    console.log(TollBooth.moneyCollected);
  }
}

const Toll = new TollBooth();

Toll.display("p", "p", "n", "p", "n");

/*
Assignment II AFE 
Note: Implement the solution of assignment in Typescript 
Class - SafeArray 
check array indexes to see whether they are in bounds. (This makes array operations faster 
but less safe). We can use a class to create a safe array that checks the index of all array 
accesses. 
Write a class called SafeArray that uses an number array of fixed size as its only data 
member, Fix it to 5 for this program. There will be two member functions. 
The first, putElement(int index,int value), that takes an index number and an int value as 
arguments and inserts the int value into the array at the index. 
The second,getElement(int index), takes an index number as an argument and returns the 
int value of the element with that index. If the index is greater than size, then return -1. 
let sa1=new SafeArray(); // define a SafeArray object 
let temp = 125; // define an int value 
sa1.putElement(3, temp); // insert value of temp into array at index 3 
temp = sa1.getElement(3); // obtain value from array at index 3 
sa1.putElement(27, temp); // insert value of temp into array at index 27 
//message should appear No valid index:1 failed attempt and invalid attempts are 27 
sa1.putElement(7, temp); // insert value of temp into array at index 7 
//message should appear No valid index:2 failed attempt and invalid attempts are 27,7 
Both functions should check the index argument to make sure it is not less than 0 or greater 
than size of array, consider the variable as private and make property methods to access 
their data at any instance
*/
class SafeArr {
  numberArray: [number, number, number, number, number] = [0, 0, 0, 0, 0];
  constructor() {}
  putElement(index: number, value: number): void {
    if (index >= this.numberArray.length || index < 0) return;
    this.numberArray[index] = value;
  }
  getElement(index: number): number {
    if (index >= this.numberArray.length || index < 0) return -1;
    return this.numberArray[index];
  }
}

const safe = new SafeArr();
safe.putElement(1, 23);
safe.putElement(3, 77);
console.log(safe.getElement(0));
console.log(safe.getElement(1));
console.log(safe.getElement(10));

////////////////////////////////////////////////////
// A cash processing company has a class called Account used to process transactions:
// Method/Constructor Description
// Account(accno)  constructs an account using account number given
// boolean process(trans)  processes the next transaction, returning true if transaction was approved, false otherwise
// Account objects interact with Transaction objects, which have many methods including:
// value()  returns the value of this transaction in rupees (could be negative, positive or zero)
// The company wishes to create a slight modification to the Account class that filters out zero-valued transactions. Design a new class called FilteredAccount whose instances can be used in place of an Account object but which include the extra behavior of not processing transactions with a value of 0. More specifically, the new class should indicate that a zero-valued transaction was approved but shouldn't call the process method in the Account class to process it. Your class should have a single constructor that accepts a parameter of type number, and it should include the following method:
// filtered()  returns the number of transactions filtered out; returns 0 if no transaction submitted
// [Hint: override the process() method and call Account class process() for non-zero value transaction, otherwise ignore it. Also put a counter for transactions and manipulate in process() method.)
class Transaction {
  value(): number {
    // Implementation of the value method
    // ...
    return 1;
  }
}

class Account {
  private accno: number;
  private transactions: number;

  constructor(accno: number) {
    this.accno = accno;
    this.transactions = 0;
  }

  process(trans: Transaction): boolean {
    this.transactions++;
    // Process the transaction here
    // ...
    return true; // Placeholder value, replace with actual implementation
  }
}

class FilteredAccount extends Account {
  private filteredTransactions: number;

  constructor(accno: number) {
    super(accno);
    this.filteredTransactions = 0;
  }

  process(trans: Transaction): boolean {
    if (trans.value() === 0) {
      this.filteredTransactions++;
      return true;
    }
    return super.process(trans);
  }

  filtered(): number {
    return this.filteredTransactions;
  }
}

// Actress and Actors
class Person {
  name: string;
  color: string;
  no_of_eyes: number;

  constructor(name: string, color: string, eyes: number) {
    this.name = name;
    this.color = color;
    this.no_of_eyes = eyes;
  }
}

class Actor extends Person {
  debut_year: number;
  constructor(name: string, color: string, eyes: number, debut: number) {
    super(name, color, eyes);
    this.debut_year = debut;
  }

  toString(): void {
    let detail: string =
      "The person " +
      this.name +
      "is an Actor. He is " +
      this.color +
      " in color, has " +
      this.no_of_eyes +
      " eyes and debut in " +
      this.debut_year;
    console.log(detail);
  }
}

class Actress extends Person {
  debut_year: number;

  constructor(name: string, color: string, eyes: number, debut: number) {
    super(name, color, eyes);
    this.debut_year = debut;
  }

  toString(): void {
    let detail: string =
      "The person " +
      this.name +
      "is an Actor. He is " +
      this.color +
      " in color, has " +
      this.no_of_eyes +
      " eyes and debut in " +
      this.debut_year;
    console.log(detail);
  }
}

let p1 = new Actor("Amitabh", "Brown", 2, 1965);
let p2 = new Actress("Hema", "White", 2, 1975);
p1.toString();
p2.toString();
