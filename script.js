
function submitted(loc,tok) {
    let url = `http://api.weatherstack.com/current?access_key=${tok}&query=${loc}`

    let weatherData;
    fetch(url)
        .then(data => { 
            if(document.getElementById('location').value==" "){
                alert("Please enter location")
            }
            return data.json() }
        )

        .then(json => {
            console.log(json)
            weatherData = json;
            document.getElementById('loca').innerText = weatherData.location.name
            document.getElementById('lat').innerText = weatherData.location.lat
            document.getElementById('long').innerText = weatherData.location.lon

            document.getElementById('timezone').innerText = weatherData.location.timezone_id
            document.getElementById('windSpeed').innerText = weatherData.current.wind_speed
            document.getElementById('pressure').innerText = weatherData.current.pressure
            document.getElementById('humidity').innerText = weatherData.current.humidity

            document.getElementById('wind_dir').innerText = weatherData.current.wind_dir
            document.getElementById('uv_index').innerText = weatherData.current.uv_index
            document.getElementById('feelslike').innerText = weatherData.current.feelslike
        }
        )
        .catch(error => {
            alert("Failed to load Weather info")
            throw(error);
        })
   

}

function accesskey(){
    const locat = document.getElementById('location').value;
 
    const token = document.getElementById('token').value;
    checkforerror(locat,token)
}
function checkforerror(location,key){
    
    if(location ==""){
        alert("Please Enter Location")
    }
    else if (key ==""){
        alert("Please Enter Access Key")
    }
    else{
        submitted(location,key);
    }
}
