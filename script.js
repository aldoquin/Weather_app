var button = $('#btnSubmit')
 var recentList = document.querySelector('#recentList')
button.click(function(event){
  event.preventDefault();
  var citySearch = $('#searchBar').val()
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&appid=9f5ed968cd7052cfa23b29d8fa2f4bad`
  local(citySearch)
  getApi(requestUrl)
  });

  function getApi(requestUrl){
    fetch(requestUrl)
    .then(function (response){
      return response.json()
    })
    .then (function(updatedApi){
    UserInput(updatedApi)  
    }) 
  }






  button.click(function(event){
    event.preventDefault();
    var citySearch = $('#searchBar').val()
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=imperial&appid=9f5ed968cd7052cfa23b29d8fa2f4bad`
 
    getApi_2(requestUrl)
    });

 function getApi_2(requestUrl){
      fetch(requestUrl)
      .then(function (response){
        return response.json()
      })
      .then (function(updatedApi){
      fivedayApi(updatedApi)
      }) 
    }






var UserInput =  function(data){
  cityName = data.name
  weather  = data.weather[0].description
  degrees = data.main.temp
  wind = data.wind.speed
  humidity = data.main.humidity
  feels_like = data.main.feels_like

  $('#info').append(cityName)
  $('#weather').append(weather)
  $('#degrees').append(degrees)
  $('#wind').append(wind)
  $('#humidity').append(humidity)
  $('#feels_like').append(feels_like)
}

var fivedayApi =function(ApiData){
  console.log(ApiData);
  for(i=0;i < 5; i++){
   var list = ApiData.list[i].main.temp
   var list2 =ApiData.list[i].main.humidity
   var list3 =ApiData.list[i].weather[0].description
    $(`#day${i}`).append(`<p>${list2}</p>`)
    $(`#day${i}`).append(`<p>${list}</p>`)
    $(`#day${i}`).append(`<p>${list3}</p>`)
  }
}
function local(data){
  localStorage.setItem(data , data)
  loadBtn()
//   var locationD = document.createElement('button')
//  locationD.textContent = data
//   recentList.appendChild(locationD)
  
}


function loadBtn() {
for(i=0;i <localStorage.length;i++){
var location = window.localStorage.key(i)
location=localStorage.getItem(location)
var locationD = document.createElement('button')
locationD.textContent = location;
locationD.className = "city-name";
locationD.id =locationD.textContent;
recentList.appendChild(locationD)
}
historyBtnListener()
}

function historyBtnListener() {
  cityButton =document.querySelectorAll('.city-name')
for(var i=0;i<cityButton.length; i++){
 
  cityButton[i].addEventListener('click',function(event){
    console.log(event.target.id); 
  //   event.preventDefault();
    location = (event.target.id) 
    // requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9f5ed968cd7052cfa23b29d8fa2f4bad`
    // requestUrl_2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=9f5ed968cd7052cfa23b29d8fa2f4bad`
console.log(typeof location);
    // getApi(requestUrl)
    // getApi_2(requestUrl_2)

  

})
}
}



































// function listOfData(location){
// localStorage.setItem(location,location)
// var locationD = document.createElement('button')
// //grabs content inside the button / we are setting the button equal to the location 
// locationD.textContent = location;
// locationD.className = "city-name";
// locationD.id =locationD.textContent;
// historyDiv.appendChild(locationD)
// cityButton =document.querySelectorAll('.city-name')
// for(var i=0;i<cityButton.length; i++){
//   cityButton[i].addEventListener('click',function(event){
//     event.preventDefault();
//     location = localStorage.getItem(event.target.id) 
//     requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9f5ed968cd7052cfa23b29d8fa2f4bad`
//     getApi(requestUrl)
//   })
// }
// }

// function dataHistory(){
//   for(i=0;i <localStorage.length;i++){
//     var KeyName = window.localStorage.key(i)
//     // console.log(KeyName)
// var location = window.localStorage.key(i)
// location=localStorage.getItem(location)
// var locationD = document.createElement('button')
// locationD.textContent = location;
// locationD.className = "city-name";
// locationD.id =locationD.textContent;
// historyDiv.appendChild(locationD)
// cityButton =document.querySelectorAll('.city-name')
// for(var i=0;i<cityButton.length; i++){
//   cityButton[i].addEventListener('click',function(event){
//     event.preventDefault();
//     location = localStorage.getItem(event.target.id) 
//     requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9f5ed968cd7052cfa23b29d8fa2f4bad`
//     getApi(requestUrl)
//   })
//   }
// }

// }

// $(document).ready(function (){
//   dataHistory();
// });













































// var fetched_data = document.querySelector('.fetched-data')


// function getApi(){
//   var requestUrl= 'https://api.openweathermap.org/data/2.5/onecall?lat=33.9425&lon=-117.2297&exclude=alerts&appid=9f5ed968cd7052cfa23b29d8fa2f4bad'
//   fetch(requestUrl)
//   .then(function (response){
//     return response.json();
//   })
//   .then (function(data){
//     console.log(data);
// for(i=0; i< data.daily.length; i++){
// if(data.daily[i].clouds ==0 ){
//   var clouds_1 = document.createElement('p')
//   clouds_1.textContent = `cloud Count: ${JSON.stringify(data.daily[i].clouds)} No CLouds Today `
//   fetched_data.append(clouds_1)
// }
// if(data.daily[i].clouds <=10 && data.daily[i].clouds >=1 ){
//   var clouds_1 = document.createElement('p')
//   clouds_1.textContent = `cloud Count: ${JSON.stringify(data.daily[i].clouds)} somewhat cloudy `
//   fetched_data.append(clouds_1)
// }
// if(data.daily[i].clouds >10){
//   var clouds_1 = document.createElement('p')
//   clouds_1.textContent = `cloud Count: ${JSON.stringify(data.daily[i].clouds)} super cloudy `
//   fetched_data.append(clouds_1)
// }
// }
//     // data.current.forEach(i => {
//     //    const apiData =document.createElement('p');
//     //    apiData.textContent = JSON.stringify(i)
//     //   fetched_data.append(apiData)
      
//     // });
   
//   })
// }
// getApi();