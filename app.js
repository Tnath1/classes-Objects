// class

class MyShop {
  shoes = 12;
  wristWatch = 3;
  shrt = 7;

  static trouser = 8;
  static bracelet = 9;

  //method
  displayObj() {
    console.log(this);
  }

  sumOfItems() {
    let sum = this.shoes + this.wristWatch + this.shrt;
    console.log(sum);
    return sum;
  }

  static newStat() {
    console.log(MyShop.bracelet);
  }
}
// instantiating an object
const myShop = new MyShop();

// displaying the object
myShop.displayObj();

// acessing  the object myShop
console.log(myShop.shoes);
console.log(myShop.wristWatch);

//accessing the method in this object
console.log(`The sum of the items is: ${myShop.sumOfItems()}`);

//accessing the static class
MyShop.newStat();
