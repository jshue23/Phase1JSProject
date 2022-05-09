//Grab user's location on webpage load
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDescription = document.querySelector(".temp-description")
    let tempDegree = document.querySelector(".temp-degree"); 
    let locationTimezone = document.querySelector(".location-timezone");
    let tempIcon = document.getElementById("temp_icon");
    let iconFile;

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
//Object destructuring, extracting data from API and store it in variable names
                const {temp} = data.main;
                const {country} = data.sys;
                const {description, id, main} = data.weather[0];
//Set DOM Elements from the API
                tempDegree.textContent = temp;
                locationTimezone.textContent = country;
                tempDescription.textContent = description;
                tempDegree.textContent = Math.round(temp-0.1)
                if (id < 250){ 
                tempIcon.src = './icons/thunder.svg'
                } 
                else if (id < 350){
                tempIcon.src = './icons/drizzle.svg'
                }
                else if (id < 550){
                tempIcon.src = './icons/rain.svg'
                }
                else if (id < 650){
                tempIcon.src = './icons/snow.svg'
                }
                else if (id < 800){
                tempIcon.src = './icons/atmosphere.svg'
                }
                else if (id === 800){
                tempIcon.src = './icons/sunny.svg'
                }
                else if (id > 800){
                tempIcon.src = './icons/cloudy.svg'
                }
        });
    });
}
});