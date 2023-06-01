"use strict";
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
    constructor() {
        // TollBooth.numberOfCarsPassed = 0;
        // TollBooth.moneyCollected = 0;
    }
    payingCar() {
        TollBooth.numberOfCarsPassed++;
        TollBooth.moneyCollected += 50;
    }
    nopayCar() {
        TollBooth.numberOfCarsPassed++;
    }
    display(...input) {
        input.forEach((el) => {
            if (el === "p") {
                this.payingCar();
            }
            else {
                this.nopayCar();
            }
        });
        console.log(TollBooth.numberOfCarsPassed);
        console.log(TollBooth.moneyCollected);
    }
}
TollBooth.numberOfCarsPassed = 0;
TollBooth.moneyCollected = 0;
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
    constructor() {
        this.numberArray = [0, 0, 0, 0, 0];
    }
    putElement(index, value) {
        if (index >= this.numberArray.length || index < 0)
            return;
        this.numberArray[index] = value;
    }
    getElement(index) {
        if (index >= this.numberArray.length || index < 0)
            return -1;
        return this.numberArray[index];
    }
}
const safe = new SafeArr();
safe.putElement(1, 23);
safe.putElement(3, 77);
console.log(safe.getElement(0));
console.log(safe.getElement(1));
console.log(safe.getElement(10));
