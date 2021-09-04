const weatherPrinter = document.querySelector(".weather");

const KEY_API = "f72c1af814b9cbffa7bb18f7464f5c43";
const COORDS = "coords";

const handleCoords=()=>{
    navigator.geolocation.getCurrentPosition();
}

const savePosition=(region)=>{
    localStorage.setItem(COORDS, JSON.stringify(region));
}

const getWeather=(lat, lon)=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API}`;
    fetch(url)
        .then(function(response){
        return response.json();
        })
        .then(function(json){
            weatherPrinter.innerText = `Region: ${json.name} 
            Weather: ${json.weather[0].main}`;
        })


}

const handleGeoSuccess=(position)=>{
    const region={
        latitude : position.coords.latitude,
        longitude : position.coords.longitude
    };
    savePosition(region);
    getWeather(region.latitude,region.longitude);
}

const handleError=()=>{
    alert("Fail To Get Your Region!!");
}

const askForCoords=()=>{
    console.log("hello");
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleError);
}

const loadCoords=()=>{
    const loadedcoords = localStorage.getItem(COORDS);
    if(loadedcoords == null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedcoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

const init_=()=>{
    loadCoords();
}

init_();