//Grab user's location on webpage load
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDescription = document.querySelector(".temp-description")
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
//Object destructuring, extracting data from API and store it in variable names
                const {temp} = data.main;
                const {country} = data.sys;
                const {description, id, main} = data.weather[0];
//Set DOM Elements from the API
                tempDegree.textContent = temp;
                locationTimezone.textContent = country;
                tempDescription.textContent = description;

window.addEventListener('load', ()=> {
//Calling skycons variable
            const skycons = new skycons({color: "white"});
//Display and play icon according to API's weather conditions
                skycons.add(document.getElementById("icon1", skycons.Rain));
                if (id < 250){ 
                skycons.set("icon1", skycons.RAIN)
                skycons.play();
                } 
                else if (id < 350){
                skycons.set("icon1", skycons.RAIN)
                }
                else if (id < 550){
                skycons.set("icon1", skycons.RAIN)
                }
                else if (id < 650){
                skycons.set("icon1", skycons.SNOW)
                }
                else if (id < 800){
                skycons.set("icon1", skycons.FOG)
                }
                else if (id === 800){
                skycons.set("icon1", skycons.CLEAR_DAY)
                }
                else if (id > 800){
                skycons.set("icon1", skycons.CLOUDY)
                }
            }      
        )});
    });
}
});