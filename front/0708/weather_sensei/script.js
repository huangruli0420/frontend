const selectCity = document.querySelector("#selectCity");
const countyName = document.querySelector("#countyName");
const Wx = document.querySelector("#Wx");
const PoP = document.querySelector("#PoP");
const temperature = document.querySelector("#temperature");
const weatherImg = document.querySelector(".weatherImg");
let cityArr = [];

fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-509CE2AA-375E-4A2D-842A-A59BFAE06075")
    .then(res => res.json())
    .then(data => {
        cityArr = data.records.location;
        console.log(cityArr);

        cityArr.forEach((item) => {
            let option = document.createElement("option");
            option.textContent = item.locationName;
            option.value = item.locationName;
            selectCity.appendChild(option);
        })

        weatherInfo(cityArr, selectCity);
    })

function weatherInfo(dataArr, target){
    target.addEventListener("change",
        function(){
            let selected = target.value;
            countyName.textContent = selected;
            dataArr.forEach((item) => {
                if(item.locationName == selected){
                    Wx.textContent = item.weatherElement[0].time[0].parameter.parameterName;
                    let rain = item.weatherElement[1].time[0].parameter.parameterName;
                    PoP.textContent = `降雨機率: ${rain} %`
                    let minT = item.weatherElement[2].time[0].parameter.parameterName;
                    let maxT = item.weatherElement[4].time[0].parameter.parameterName;
                    temperature.textContent = `${minT} - ${maxT} 度`
                }
            })
        }
    )
}
