
//================================Get all the countries from Asia continent /region using Filter function
// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();
// request.onload = () =>
//  {
// var a = JSON.parse(request.response);
// var b= a.filter(function(country){

//         return country.region == "Asia"; 
//       });
//       console.log(b);
// };
// request.onerror = () => {
//   console.error("something went wrong");
// };


//========================Get all the countries with a population of less than 2 lakhs using Filter function
// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();
// request.onload = () =>
//  {
// var a = JSON.parse(request.response);
// var b= a.filter(function(country){

//         return country.population < 200000; 
//       });
//       console.log(b);
// };
// request.onerror = () => {
//   console.error("something went wrong");
// };


//==========================Print the following details name, capital, flag using forEach function
// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();
// request.onload = () =>
//  {
// var a = JSON.parse(request.response); 
//        a.forEach(data => {
//             console.log(` ${data.name} ${data.capital} ${data.flag} `)
//        });
// };
// request.onerror = () => {
//   console.error("something went wrong");
// };

//=====================Print the total population of countries using reduce function
// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();
// request.onload = () =>
//  {
// var a = JSON.parse(request.response); 

// var b= a.reduce(function(v,u){

//             return v+u.population; 
//           },0);
//           console.log(b);
// request.onerror = () => {
//   console.error("something went wrong");}
// };




//======================Print the country which uses US Dollars as currency.

// let Asiacountries=[
    
//     {
//     country: "china",
//     currency: "yuan",
//     },
//     {
//     country: "India",
//     currency: "Rupees",
//     },
//     {country: " United states",
//     currency: "USD",
// },
//     { country: "Ecuador",
//     currency: "USD",
// },
// {country: "Panama",
// currency: "USD",
// },
// ];
// let countries= Asiacountries.filter(function(value){
//     return value.currency=="USD";
//     })
// console.log(countries);

















