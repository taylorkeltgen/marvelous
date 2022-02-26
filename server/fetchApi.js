// var apiKey = "af182758c9239d5a0f1cab5a0418329b"
// var url = "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=af182758c9239d5a0f1cab5a0418329b&units=imperial"
const express = require('express');
require('dotenv').config();
const md5 = require('md5');
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;
const testUrl = `https://gateway.marvel.com/v1/public/characters/ts=${timeStamp}&apikey=${publicKey}&hash=${token}`;
const timeStamp = new Date().getTime();
const token = md5(timeStamp, privateKey, publicKey);

// var getWeather = function (url) {
//     fetch(url).then(function (response) {
//       // request was successful
//       if (response.ok) {
//         response.json().then(function (data) {
//           console.log(data);
//           var temp = (data.main.temp)
//           tempEl.textContent = temp;
//           $("#wicon").attr("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
//           console.log (temp)
//           });
//     } else {
//         alert("There was a problem with your request!");
//      }
//     });
// }
//   getWeather(url)

// const getUserRepos = function(user) {
//     // format the github api url
//     // const apiUrl = "https://api.github.com/users/" + user + "/repos";

//     // make a get request to url
//     fetch(testUrl)
//       .then(function(response) {
//         // request was successful
//         if (response.ok) {
//           console.log(response);
//           response.json().then(function(data) {
//             console.log(data);

//           });
//         } else {
//           alert('Error: Not Found');
//         }
//       })
//       .catch(function(error) {
//         alert("Unable to connect");
//       });
//   };
