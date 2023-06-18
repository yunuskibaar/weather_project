const URL="https://api.openweathermap.org/data/2.5/";

const key="c78c8ab3de259a7f2c4dd9fbc5f22c65";

const searchBar=document.getElementById("searchBar");

const setQuary =(e) =>{
    if(e.keyCode=='13'){
        getResult(searchBar.value)

    }

}
const getResult =(cityName) =>{

   let quary=`${URL}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(quary)
   .then(weather =>{
    return weather.json()
   })
   .then(displayResult)
}
const displayResult = (result) =>{
    let city = document.querySelector(".city");
    city.innerText=`${result.name},${result.sys.country}`;

     let temp =document.querySelector('.temp');
     temp.innerHTML=`${result.main.temp}°C`;
     console.log(temp);

     let desc=document.querySelector(".desc");
     desc.innerText=result.weather[0].description;

     let minmax= document.querySelector(".minMax");
     minmax.innerText=`${result.main.temp_min}°c /  ${result.main.temp_max}°c`
    
}
searchBar.addEventListener('keypress', setQuary)


