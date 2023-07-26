// 1
// Alex = 24

// 2
// const person = {
    // name: 'Alex',
    // age: 24,
    // call: function() {
        // console.log(`${this.name} = ${this.age}`);
    // }
// }
// person.call()

// 3
// const person = {
    // name: 'Alex',
    // age: 24,
    // city: 'Baku',
    // call: function() {
        // console.log(`${this.name} = ${this.age}`);
    // }
// }
// 
// for(let i in person){
    //   console.log(i);
//   }  

// 4
// const person = {
    // name: 'Alex',
    // age: 24,
    // city: 'Baku',
    // call: function() {
        // console.log(`${this.name} = ${this.age}`);
    // }
// }
// 
//  for(let i in person){
    //  console.log(person[i]);
//  }  

// 5
// const person = {
    // name: 'Alex',
    // age: 24,
    // city: 'Baku',
    // call: function() {
        // console.log(`${this.name} = ${this.age}`);
    // }
// }
// 
// const arr = Object.entries(person).flat();
// console.log(arr); 

// 6
// const person = {
    // name: 'Alex',
    // age: 24,
    // city: 'Baku',
    // call: function() {
        // console.log(`${this.name} = ${this.age}`);
    // }
// }
// 
// let stroka = JSON.stringify(person); 
// console.log(stroka);

// 7
//  let obj1 = {
    //  name: 'Alex',
    //  age: 24,
    //  isMarried: false,
    //  hasCar: false,
    //  hasJob: true,
    //  job: 'Programmer',
    //  childs: ['Hanz', 'Marry'],
    //  awards: {
        //  itMaster: 'Legend rang',
        //  driver: 'Fast man'
    //  }
//  }



// не уверен что правильно,но работает):
//  class stoto {
    //  constructor(){
    //  this.name = 'Alex'
    //  this.age = 24
    //  this.isMarried = false
    //  this.hasCar = false
    //  this.hasJob = true
    //  this.job = 'Programmer',
    //  this.childs = ['Hanz', 'Marry'],
    //  this.awards = {
        //  itMaster: 'Legend rang',
        //  driver: 'Fast man'
    //  }
    //  }
//  }
// 
// 
//  let user3 = new stoto()
//  console.log(user3);

// 8
// Это некоторые:
// new Date
// new constructor
// new Animation
// new Array



// 9
// function Person(name, age, job) {
    // this.name = name;
    // this.age = age;
    // this.job = job;
// }
// 
// let pers = new Person('Renat', 11, 'skolnik')
// console.log(pers);