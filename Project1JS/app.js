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
                });
            });
        }

        
    window.onload = function iconDisplay() {
    // Calling skycons variables
        let skycons1 = new Skycons({"color": "white"});
    //Display and play icon according to API's weather conditions
        skycons1.add(document.getElementById("icon1", Skycons.Rain));
            if (id < 250){ 
                skycons1.set("icon1", Skycons.RAIN)
            } 
            else if (id < 350){
                skycons1.set("icon1", Skycons.RAIN)
            }
            else if (id < 550){
                skycons1.set("icon1", Skycons.RAIN)
            }
            else if (id < 650){
                skycons1.set("icon1", Skycons.SNOW)
            }
            else if (id < 800){
                skycons1.set("icon1", Skycons.FOG)
            }
            else if (id === 800){
                skycons1.set("icon1", Skycons.CLEAR_DAY)
            }
            else if (id > 800){
                skycons5.set("icon1S", Skycons.CLOUDY)
            }
            skycons1.play();
    }      
    
});