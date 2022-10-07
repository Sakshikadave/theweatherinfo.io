const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');



const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.Value;
    if (cityVal === "") {
        city_name.innerText = `Please write the name before search`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=f4dfb4fc1b9937442ee5d0fb48d89e64`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;


        } catch {
            city_name.innerText = `Please enter the city name properly`;
        }
    }

}

submitBtn.addEventListener("click", getInfo)