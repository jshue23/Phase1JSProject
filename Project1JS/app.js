//Grab user's location on webpage load
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDegree = document.querySelector(".temp-degree"); 
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=723554c5ccd52d5e9d82d54d042f7a9c&units=metric`;

//Grab data from API and return
            fetch(api) 
                .then((response) =>{
                    return response.json();
                })
                .then(data =>{
                console.log(data);
                const {temp} = data.main;
                const {country} = data.sys;
                //Set DOM Elements from the API
                tempDegree.textContent = temp;
                locationTimezone.textContent = country;
                });
            });
        }
});