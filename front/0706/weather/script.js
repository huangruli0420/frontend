const county = document.querySelector("#county");
const countyName = document.querySelector("#countyName");
const Wx = document.querySelector("#Wx");
const PoP = document.querySelector("#PoP");
const temperature = document.querySelector("#temperature");
const weatherImg = document.querySelector(".weatherImg");
var countyNameArr = [];
var WxArr = [];
var WxCodeArr = [];
var PoPArr = [];
var minTArr = [];
var maxTArr = [];

fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-509CE2AA-375E-4A2D-842A-A59BFAE06075")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //給選擇器加選項
        // for(let i = 0; i < data.records.location.length; i++){
        //     county.innerHTML += '<option value="' + data.records.location[i].locationName + '">' + data.records.location[i].locationName + '</option>'
        // }

        //製作天氣資訊陣列(data不能在fetch外使用)
        for (let i = 0; i < data.records.location.length; i++) {
            countyNameArr.push(data.records.location[i].locationName);
            WxArr.push(data.records.location[i].weatherElement[0].time[0].parameter.parameterName);
            WxCodeArr.push(parseInt(data.records.location[i].weatherElement[0].time[0].parameter.parameterValue));
            PoPArr.push(data.records.location[i].weatherElement[1].time[0].parameter.parameterName);
            minTArr.push(data.records.location[i].weatherElement[2].time[0].parameter.parameterName);
            maxTArr.push(data.records.location[i].weatherElement[4].time[0].parameter.parameterName);
        }

        //預設為台北市
        showData(countyNameArr[5], 5);
        // countyName.innerHTML = countyNameArr[5];
        // Wx.innerHTML = WxArr[5];
        // PoP.innerHTML = "降雨機率：" + PoPArr[5] + "%";
        // temperature.innerHTML = minTArr[5] + " - " + maxTArr[5] + "°C";
        // if (WxCodeArr[5] == 1) {
        //     weatherImg.innerHTML = '<i class="fa-solid fa-sun"></i>';
        // }
        // if (WxCodeArr[5] == 2 || WxCodeArr[5] == 3) {
        //     weatherImg.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
        // }
        // if (WxCodeArr[5] > 3 && WxCodeArr[5] < 8) {
        //     weatherImg.innerHTML = '<i class="fa-solid fa-cloud"></i>';
        // }
        // if ((WxCodeArr[5] > 7 && WxCodeArr[5] < 11) || (WxCodeArr[5] > 28 && WxCodeArr[5] < 42)) {
        //     weatherImg.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
        // }
        // if (WxCodeArr[5] > 10 && WxCodeArr[5] < 23) {
        //     weatherImg.innerHTML = '<i class="fa-solid fa-umbrella"></i>';
        // }
        // if (WxCodeArr[5] == 23 || WxCodeArr[5] == 42) {
        //     weatherImg.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
        // }
        // if (WxCodeArr[5] > 23 && WxCodeArr[5] < 29) {
        //     weatherImg.innerHTML = '<i class="fa-solid fa-smog"></i>';
        // }
    });

county.addEventListener("change",
    function (event) {
        countyNameArr.forEach((element, index) => {
            if (event.target.value == element) {
                showData(element, index);
                // countyName.innerHTML = element;
                // Wx.innerHTML = WxArr[index];
                // PoP.innerHTML = "降雨機率：" + PoPArr[index] + "%";
                // temperature.innerHTML = minTArr[index] + " - " + maxTArr[index] + "°C";
                // if (WxCodeArr[index] == 1) {
                //     weatherImg.innerHTML = '<i class="fa-solid fa-sun"></i>';
                // }
                // if (WxCodeArr[index] == 2 || WxCodeArr[index] == 3) {
                //     weatherImg.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
                // }
                // if (WxCodeArr[index] > 3 && WxCodeArr[index] < 8) {
                //     weatherImg.innerHTML = '<i class="fa-solid fa-cloud"></i>';
                // }
                // if ((WxCodeArr[index] > 7 && WxCodeArr[index] < 11) || (WxCodeArr[index] > 28 && WxCodeArr[index] < 42)) {
                //     weatherImg.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
                // }
                // if (WxCodeArr[index] > 10 && WxCodeArr[index] < 23) {
                //     weatherImg.innerHTML = '<i class="fa-solid fa-umbrella"></i>';
                // }
                // if (WxCodeArr[index] == 23 || WxCodeArr[index] == 42) {
                //     weatherImg.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
                // }
                // if (WxCodeArr[index] > 23 && WxCodeArr[index] < 29) {
                //     weatherImg.innerHTML = '<i class="fa-solid fa-smog"></i>';
                // }
            }
        });
    }
)

function showData(county, index) {
    countyName.innerHTML = county;
    Wx.innerHTML = WxArr[index];
    PoP.innerHTML = "降雨機率：" + PoPArr[index] + "%";
    temperature.innerHTML = minTArr[index] + " - " + maxTArr[index] + "°C";
    if (WxCodeArr[index] == 1) {
        weatherImg.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    if (WxCodeArr[index] == 2 || WxCodeArr[index] == 3) {
        weatherImg.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
    }
    if (WxCodeArr[index] > 3 && WxCodeArr[index] < 8) {
        weatherImg.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    }
    if ((WxCodeArr[index] > 7 && WxCodeArr[index] < 11) || (WxCodeArr[index] > 28 && WxCodeArr[index] < 42)) {
        weatherImg.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
    }
    if (WxCodeArr[index] > 10 && WxCodeArr[index] < 23) {
        weatherImg.innerHTML = '<i class="fa-solid fa-umbrella"></i>';
    }
    if (WxCodeArr[index] == 23 || WxCodeArr[index] == 42) {
        weatherImg.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
    }
    if (WxCodeArr[index] > 23 && WxCodeArr[index] < 29) {
        weatherImg.innerHTML = '<i class="fa-solid fa-smog"></i>';
    }
}






