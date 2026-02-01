// TASK 1
// console.log("My name is Maqa");

// TASK 2
// const name = "Maqa";
// console.log (name);

// Task 3
// person
// &add

// Task 4
// let bookprice = 19;
// let bookAmount = 5;
// console.log(bookprice * bookAmount);

// task 5
// let kmhSpeed = 90;
// let msSpeed = (kmhSpeed * 1000) / 3600;

// console.log(msSpeed);

// task 6
// let birthDate = new Date(prompt("Doğum tarixini daxil et (YYYY-MM-DD):"));

// console.log(birthDate);

// task 7
// let num = 10;
// console.log(num ** 5);
// console.log(num % 3);

// task 8 +9  (ikisi birlikdedir :)
// let firstName = "Maqa";
// let lastName = "Bagirov";
// console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`);

// task 10
// let fullName = "Maqa Bagirov";
// console.log(fullName.length);

// task 11
// let fullName = "Maqa Bagirov";
// console.log(fullName [0]);
// console.log(fullName [5]);

// task 12
// let Name = prompt("Adınızı daxil edin:");
// let lastName = prompt("Soyadınızı daxil edin:");

// console.log(`${lastName} ${Name}`);

// task 13
// let fullName = prompt("Adınızı daxil edin:");
// console.log(`Salam, ${fullName}!`)

// task 14
// let a = Number(prompt("Reqem daxil edin"));
// let b = Number(prompt("ikinci reqemi daxil edin"));

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// task 15
// let result = 12345 * 98765;
// let number = result.toString()[6];

// console.log(number);

// -----------------ANLAMADIMMMMMMMM-----------
// task 16
// task 17

// task 18
// let fullName = prompt("Ad ve soyadini daxil ele");

// console.log(`Salam, ${fullName}!`);

// task 19
// let price = prompt("Qiymət daxil edinn (530.90)");
// let parts = price.split(".");

// console.log(`${parts[0]} manat ${parts[1]} qəpik`);

// task 20
// let number = prompt("Maasini qeyd ele emioglu");
// let number2 = (number * 100) / 13 ;

// console.log(number2);

// task 21

// let fullName = prompt("Soyad Ad Ata adıni daxil edin","Ivan Pyotor Sergevic");

// let parts = fullName.split(" ");
// let lastName = parts[0];
// let firstName = parts[1];
// let fatherName = parts[2];

// console.log(`${lastName} ${firstName[0]}.${fatherName[0]}.`);

// task 22

// let amount = (prompt("Məbləğ"));
// let years = (prompt("Müddət (il)"));
// let percent =(prompt("Faiz"));

// let profit = (amount * percent) / (100 * years);
// console.log(profit);

// task 23

// let value = 10

// console.log(value === 10);
// console.log(value < 12);
// console.log(value <= 10);
// console.log(value !== 20);
// console.log(value == 10 );

// task 24
// let years = prompt("How old are you?")
// if(years <= 18) {
//     alert("girise icaze verilmir");
// } else {
//     alert("xos gelmisiz");
// }

// task 25
// let first = prompt("3 dene eded ver 2 reqemli", "11 12 13");

// let arr = first.split(" ");
// let a = Number(arr[0]);
// let b = Number(arr[1]);
// let c = Number(arr[2]);
// //11-12-13
// //12-11-13
// //12-13-11
// //13-11-12
// //13-12-11
// //11-13-12
// if (a === b || a === c || b === c) {
//   alert("Ədədlərdə təkrar var!");
// } else if (a > b && a < c) {
//   console.log(a);
// } else if (a < b && a > c) {
//   console.log(a);
// } else if ((b > a && b < c) || (b < a && b > c)) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// task 26 

// let years = Number(prompt("Ilinizi qeyd edin:"));
// if (years % 4 === 0)  {
//   alert("il uzun il deyil");
// } else {
//   alert("il uuzun ildir");
// }

// task 27
// let id = prompt("enter product id:");
// switch (id) {
//   case "1":
//     alert("Available 10 pcs.");
//     break;
//   case "2":
//     alert("Available 256 pcs.");
//     break;
//   case "3":
//     alert("Available 53 pcs.");
//     break;
//   case "4":
//     alert("There are 3 available.");
//     break;
//   default:
//     alert("Out of stock");
// }

// task 28
// let gender = prompt("What gender are you? (male/female)");
// if(gender === "male") {
//   console.log('kisidir');
// }else if(gender === "female"){
//   console.log('qadinidir');
// } else {
//   console.log('Duzgun daxil etmediniz');
// }

// task 29
// let key = prompt(" ayin nomresiini yaz ");
// switch (key) {
//   case "1":
//   console.log("Yanvar");
//     break;
    
//   case "2":
//     alert("Fevral");
//     break;
//   case "3":
//     alert("Mart");
//     break;
//   case "4":
//     alert("Aprel");
//     break;
//   case "5":
//     alert("May");
//     break;
//   case "6":
//     alert("Iyun");
//     break;
//   case "7":
//     alert("Iyul");
//     break;
//   case "8":
//     alert("Avqust");
//     break;
//   case "9":
//     alert("Sentyabr");
//     break;
//   case "10":
//     alert("Oktyabr");
//     break;
//   case "11":
//     alert("Noyabr");
//     break;
//   case "12":
//     alert("Dekabr");
//     break;
//   default:
//     alert("Duzgun daxil etmediniz");
//     break;
// }

// task 29 ikinci usull daha qisa -------------------
// let key = prompt("Ayın nömrəsini yaz"); // Məs: "3"

// let months = [
//   "Yanvar","Fevral","Mart","Aprel","May","Iyun",
//   "Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"
// ];

// if (key >= 1 && key <= 12) {
//   alert(months[key - 1]);
// } else {
//   alert("Duzgun daxil etmediniz");
// }
// =======================================
// task 30
// let date = prompt('Tarixi daxil edin (misal: 2024-01-01)');
// let year = date.split("-")[0];
// let month = date.split("-")[1];
// let day = date.split("-")[2];
// switch(month) {
//   case "1":
//   console.log(`${day} yanvar ${year} ci il`);
//     break;
//   case "2":
//   console.log(`${day} fevral ${year} ci il`);
//     break;
//   case "3":
//     console.log(`${day} mart ${year} ci il`);
//     break;
//   case "4":
//     console.log(`${day} aprel ${year} ci il`);
//     break;
//   case "5":
//     console.log(`${day} may ${year} ci il`);
//     break;
//   case "6":
//     console.log(`${day} iyun ${year} ci il`);
//     break;
//   case "7":
//     console.log(`${day} iyul ${year} ci il`);
//     break;
//   case "8":
//     console.log(`${day} avqust ${year} ci il`);
//     break;
//   case "9":
//     console.log(`${day} sentyabr ${year} ci il`);
//     break;
//   case "10":
//     console.log(`${day} oktyabr ${year} ci il`);
//     break;
//   case "11":
//     console.log(`${day} noyabr ${year} ci il`);
//     break;
//   case "12":
//     console.log(`${day} dekabr ${year} ci il`);
//     break;
//   default:
// }

// task 30 ikinci usulluuu --------------------
// let date = prompt("Tarixi daxil edin (misal: 2024-01-01)");

// let [year, month, day] = date.split("-");

// let months = [
//   "yanvar", "fevral", "mart", "aprel", "may", "iyun",
//   "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"
// ];

// console.log(`${day} ${months[month - 1]} ${year} ci il`);



// task 31
// let p = 10; 
// 9 8 
// let q = p-- - --p + p++ + ++p;
// console.log(p, q);

// task 32

// let a = 6, b = 4, c = 2;
// let x = ++a - b-- + c++ - --b + a++;
// let y = a-- + --c - ++b + x++ - --a;

// console.log(a, b, c, x, y);



