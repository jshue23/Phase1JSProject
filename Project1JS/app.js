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

        
    function iconDisplay() {
    // Calling skycons variables
        let skycons1 = new Skycons({"color": "#3da4ab"});
        let skycons2 = new Skycons({"color": "#3EB890"});
        let skycons3 = new Skycons({"color": "#E8A723"});
        let skycons4 = new Skycons({"color": "#472A49"});
        let skycons5 = new Skycons({"color": "#65863A"});
        let skycons6 = new Skycons({"color": "#CC2027"});
    //Display and play icon according to API's weather conditions
        if (id < 250){ 
            skycons1.add("icon1", skycons.RAIN)
            skycons1.play();
        } 
        else if (id < 350){
            skycons1.add("icon1", skycons.RAIN)
            skycons1.play();
        }
        else if (id < 550){
            skycons1.add("icon1", skycons.RAIN)
            skycons1.play();
        }
        else if (id < 650){
            skycons2.add("icon2", skycons.SNOW)
            skycons2.play();
        }
        else if (id < 800){
            skycons3.add("icon3", skycons.FOG)
            skycons3.play();
        }
        else if (id === 800){
            skycons4.add("icon4", skycons.CLEAR_DAY)
            skycons4.play();
        }
        else if (id > 800){
            skycons5.add("icon5", skycons.CLOUDY)
            skycons5.play();
        }
    }      
    
});