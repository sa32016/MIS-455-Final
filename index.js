var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=d9eb453c70d8a5b72ec25d9490b73e83')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['main'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Weather condition - "+descValue;
  temp.innerHTML = "Temperature - "+tempValue;
  input.value ="";

})
})