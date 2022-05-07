//Grab user's location on webpage load
window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.weatherbit.io/v2.0/current?${lat}&${long}&key=6a946beeb18042fa9ea6362592f04763`

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