const searchbtn = document.getElementById("searchbtn");


const fetchWeather = async (userdata) => {
    const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${userdata}&appid=5b36dcbc58a95930d26a35d8d48d456b`
    );

    const result = await weatherData.json();
    console.log(result);

    
    document.getElementById('cityname').innerText = result.name;
    document.getElementById('badgeid').innerText = result.sys?.country;
    
    const temperatureresult = (result.main.temp - 273.5).toFixed(2);
    document.getElementById("temperature").innerText = temperatureresult;
};


const getdata = () => {
  const userdata = document.getElementById("searchinput").value;
  document.getElementById("searchinput").value = "";
  fetchWeather(userdata);
};

searchbtn.addEventListener("click", getdata);
