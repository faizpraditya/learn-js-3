// const trainee = {
//     firstName : "Faiz",
//     firstName : "Mason",
//     lastName : "Praditya",
//     address : {
//         province : "Jakarta", city : "Jakarta Selatan"
//     }
// }

// // (summary) Mutation, kalau belum ada, maka akan menambahkan lagi
// trainee.email = "faiz@gmail.com"
// console.log(trainee);

// // (summary) spread untuk function
// // rest parameter must be last formal parameter
// // spreadnya harus terakhir
// // function example(a,b,...c) {
// function example(...a) {
//     console.log(a);
// }
// example(1,2,3,4,5)

// // Desctructuring
// console.log(trainee.firstName);
// // (summary, kalau mau address dan dalemnya address, harus di destruct lagi (address,address:{province,city}) )
// // urutan ga ngaruh, nama properti harus sama
// let {firstName, lastName, address, address:{province,city}} = trainee
// console.log(province);
// console.log(address);
// province = "tes"
// console.log(trainee.address.province);
// console.log(province);

// // (summary) Array destructuring
// let arr = [2,3,54,23,1]
// // let [a,b,c,d,e] = arr
// // rest element must be last element
// let [a,b,...c] = arr

// console.log(a);
// console.log(b);
// console.log(c);

// // (summary)
// // rest operator => ... di sebelah kiri assignment
// // spread operator => ... di sebelah kanan assignment

// let people = ['Mason Mount', 'Pria',
//     address = [
//         domicile = [{province: 'Jakarta', city: 'Jakarta Selatan'}],
//         origin = [{provinceOrigin: 'Jawa Tengah', cityOrigin:'Semarang'}]
//     ],
// ]

// let [nama, gender,
//     [
//         [{province, city}],
//         [{provinceOrigin, cityOrigin}]
//     ]
// ] = people

// console.log(nama);
// console.log(gender);
// console.log(province);
// console.log(city);
// console.log(provinceOrigin);
// console.log(cityOrigin);


// built in method array
// foreach, map, filter, push, etc
// pure function => map, foreach, filter, etc
// impure function => push, pop, shift, etc

// let players = ["kylian","erling","jude","mason","frenkie"]

// // (summary) foreach tidak ada return valuenya, meskipun dia function
// // let resForeach = players.forEach((element, index, arr) => {
// players.forEach((element, index, arr) => {
//     console.log(`${index+1}. Player name : ${element}`);
// })
// console.log(players);

let arrNumbers = [2,3,5,6,56,7]

// // (summary) can't be break or continue, because it's function, not loop (for, for example)
// let tesForeach = arrNumbers.forEach((e) => {
//     return e * 2
// })
// console.log(tesForeach);

// (summary) map, mengembalikan array baru dengan elemen2 baru (miliknya sendiri)
// let resMapNum = arrNumbers.map((e) => {
//     return e*2;
// })
// arrNumbers[0] = 0
// resMapNum[0] = 1
// console.log(arrNumbers);
// console.log(resMapNum);

// (summary) filter, mengembalikan elemen tertentu yang memenuhi logic yang kita gunakan
// let filtered = arrNumbers.filter((e) => {
//     return e == arrNumbers[4]
// })
// console.log(filtered);

// (summary) return 1 elemen, jadi jika udah nemu elemen yang sesuai, maka akan langsung return
// let findNumber = arrNumbers.find((e) => {
//     return e === 2
// })
// console.log(findNumber);

// // (summary) ngereturn index jika udah ketemu sesuai logic
// let findIndexByNumber = arrNumbers.findIndex((e) => {
//     return e === 2
// })

// OOP in JavaScript
// (summary) Cetakan (blueprint) object
// function Car(){
//     this.name = "";
//     this.year = "";
//     this.color = "";
// }

// // (summary) new, instantiate => membuat suatu object
// // object => hasil implementasi dari sebuah blueprint
// let c1 = new Car();
// // Object bisa dimutasi, constructor ga bisa (Car.tes="")
// c1.name  = "E30"
// c1.color = "Dark Green"
// c1.year  = "1992"

// // console.log(c1);

// function Car(name, year, color){
//     this.name = name;
//     this.year = year;
//     this.color = color;

//     this.start = function() {
//         console.log(`Turning on ${this.name} engine...`);
//     }
// }

// let c2 = new Car("Ford GT G40", "1961", "black")
// console.log(c2);
// c2.start()

// class merupakan sebuah blue print / rancangan / cetakan
// implementasikan menjadi wujud yang nyata => object
// Difference with object function is u need a constructor to assign the object
class Car {
    // Sebuah function yang akan dieksekusi pertama kali ketika object dibuat
    constructor(name, year, fuel){
        this.name = name
        this.year = year
        this.fuel = fuel
    }

    // function di dalam class ga perlu pake keyword function
    fillFuel(addFuel){
        this.fuel += addFuel
    }

    askFuel(anotherCar, tFuel){
        if (anotherCar.fuel <= tFuel) {
            console.log("habis");
        } else {
            this.fuel += tFuel
            anotherCar.fuel -= tFuel
        }
    }

    member(fuel) {
        this.fuel -= fuel
    }
}

let c3 = new Car("Ford GT40", "1961", 10)
c3.fillFuel(1)
console.log(c3);

let c4 = new Car("","",50)
console.log(c4);
c3.askFuel(c4,5)
console.log(c3);
console.log(c4);