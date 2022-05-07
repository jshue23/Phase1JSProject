//Grab user's location on webpage load
window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=723554c5ccd52d5e9d82d54d042f7a9c`;

//Grab data from API and return
            fetch(api) 
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data)
                })
            });
        }
});