// 1-masala

// let myArray = [];


// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// myArray.push(4);
// myArray.push(5);


// while (myArray.length < 5) {
//   myArray.push(myArray.length + 1);
// }

// console.log("Massiv:", myArray);


// 2-masala


// const myArray = [];


// myArray.push("Birinchi element");
// myArray.push("Ikkinchi element");
// myArray.push("Uchinchi element");


// myArray.pop();


// const myString = myArray.join(", ");


// console.log("Birlashtirilgan string:", myString);


// 3-masala


// const myArray = [];


// myArray.unshift("To'rtinchi element");
// myArray.unshift("Uchinchi element");
// myArray.unshift("Ikkinchi element");
// myArray.unshift("Birinchi element");


// myArray.reverse();


// const massivUzunligi = myArray.length;


// console.log("Natijaviy massiv:", myArray);
// console.log("Massiv uzunligi:", massivUzunligi);


// 4-masalasi


// const myArray = [];


// myArray.unshift("Birinchi element");


// myArray.shift();


// const myString = myArray.join(", ");


// console.log("Vergul bilan ajratilgan string:", myString);


// 5-masala


// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];


// let oxirgiElement = berilganMassiv.pop();


// let qolganElementlarSon = berilganMassiv.length;


// let birinchiElementQiymati = berilganMassiv[0];

// console.log("Qolgan elementlar soni: ", qolganElementlarSon);
// console.log("Birinchi elementning qiymati: ", birinchiElementQiymati);



// 6-masalasi


// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];

// berilganMassiv.push(20);

// let oxirgiElementString = String(berilganMassiv.at(-1));

// console.log("Yangi massiv: ", berilganMassiv);
// console.log("Massivning oxirgi elementi (string ko'rinishida): ", oxirgiElementString);



// 7-masalasi


// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];

// berilganMassiv.unshift(20);
// berilganMassiv.reverse();


// console.log("Yangi massiv: ", berilganMassiv);
// console.log("Natijaviy massivning uzunligi: ", berilganMassiv.length);



// 8-masalasi

// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];


// let olinganElement = berilganMassiv.shift();


// let qolganElementlarSon = berilganMassiv.length;


// let stringKo'rinish = berilganMassiv.join(', ');


// console.log("Olingan element: ", olinganElement);
// console.log("Qolgan elementlar soni: ", qolganElementlarSon);
// console.log("Qolgan elementlar (string ko'rinishida): ", stringKo'rinish);



// 10-masalasi



// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];

// let birinchiElement = berilganMassiv.shift();
// let oxirgiElement = berilganMassiv.pop();

// let qolganElementlarUzunligi = berilganMassiv.length;

// let teskariTartibdaMassiv = berilganMassiv.reverse();

// console.log("Oxirgi olingan element: ", oxirgiElement);
// console.log("Birinchi olingan element: ", birinchiElement);
// console.log("Qolgan elementlar uzunligi: ", qolganElementlarUzunligi);
// console.log("Teskari tartibda joylashtirilgan massiv: ", teskariTartibdaMassiv);



// 11-masalasi




// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];

// berilganMassiv.reverse();

// let massivStringKo'rinish = berilganMassiv.toString();

// console.log("Teskari tartibda joylashtirilgan massiv (string ko'rinishida): ", massivStringKo'rinish);
// console.log("Natijaviy string uzunligi: ", massivStringKo'rinish.length);



// 13-masalasi


// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];

// berilganMassiv.splice(2, 3);

// let massivStringKo'rinish = berilganMassiv.join(', ');

// console.log("Natijaviy massiv (string ko'rinishida): ", massivStringKo'rinish);
// console.log("Natijaviy string uzunligi: ", massivStringKo'rinish.length);


// 17-masalasi




// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];


// berilganMassiv.reverse();


// let massivStringKo'rinish = berilganMassiv.join(', ');

// let oxirgiElement = massivStringKo'rinish[massivStringKo'rinish.length - 1];

// console.log("Stringning oxirgi elementi: ", oxirgiElement);




// 18-masalasi




// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];


// let kesibOlinganElementlar = berilganMassiv.slice(0, 2);


// berilganMassiv.splice(3);


// console.log("Natijaviy massiv: ", berilganMassiv);




// 20-masalasi



// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];

// let massivStringKo'rinish = berilganMassiv.join(',');

// let qaytaMassiv = massivStringKo'rinish.split(',');

// console.log("Qayta massiv: ", qaytaMassiv);
