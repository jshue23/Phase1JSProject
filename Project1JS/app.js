// json-server --watch db.json

//Grab user's location on webpage load
window.addEventListener('load', () => {
    let long;
    let lat;
    const tempDescription = document.querySelector(".temp-description")
    const tempDegree = document.querySelector(".temp-degree");
    const locationTimezone = document.querySelector(".location-timezone");
    const tempIcon = document.getElementById("temp_icon");
    const saveData = document.querySelector(".save-data");
    let iconFile;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            var api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=723554c5ccd52d5e9d82d54d042f7a9c&units=metric`;

            //Grab data from API and return
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    //Object destructuring, extracting data from API and store it in variable names
                    const {
                        temp
                    } = data.main;
                    const {
                        country
                    } = data.sys;
                    const {
                        description,
                        id,
                        main
                    } = data.weather[0];
                    //Set DOM Elements from the API
                    tempDegree.textContent = temp;
                    locationTimezone.textContent = country;
                    tempDescription.textContent = description;
                    tempDegree.textContent = Math.round(temp - 0.1)
                    if (id < 250) {
                        tempIcon.src = './icons/thunder.svg'
                    } else if (id < 350) {
                        tempIcon.src = './icons/drizzle.svg'
                    } else if (id < 550) {
                        tempIcon.src = './icons/rain.svg'
                    } else if (id < 650) {
                        tempIcon.src = './icons/snow.svg'
                    } else if (id < 800) {
                        tempIcon.src = './icons/atmosphere.svg'
                    } else if (id === 800) {
                        tempIcon.src = './icons/sunny.svg'
                    } else if (id > 800) {
                        tempIcon.src = './icons/cloudy.svg'
                    }
                    const savedEntry = {
                        temperature: '',
                        date: '',
                    };
//POST
var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date();
        console.log(today.toLocaleDateString("en-US"));
                    savedEntry.temperature = tempDegree.textContent,
                    savedEntry.date = today.toLocaleDateString("en-US")
                    console.log(tempDegree.textContent);
                    const optionsPost = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(savedEntry),
                     };
                     const addEntry = document.querySelector(".save-button");
                     addEntry.addEventListener('click', () => {
                        fetch('http://localhost:3000/saveWeather', optionsPost)
                });
                fetch("http://localhost:3000/saveWeather")
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let lastElement = data[data.length - 1];
            console.log(lastElement);
            const list = document.querySelector(".save-data");
            displayEntry = document.querySelector(".add-button");
                displayEntry.addEventListener('click', () => {
                    const li = document.createElement("li");
                    li.innerHTML = lastElement;
                    list.append(li);
            })
                 })
        });
        fetch("http://localhost:3000/saveWeather")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const list = document.querySelector(".save-data");
                data.forEach(element => {
                    const li = document.createElement("li");
                    li.innerHTML = `${element.date} : ${element.temperature}°C `
                        //DELETE
                        const deleteEntry = document.querySelector(".delete-button"); 
                        deleteEntry.addEventListener('click', () => {
                        list.dependChild(li);
                })
            });
        })
    })
    }
})
