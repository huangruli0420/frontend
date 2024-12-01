var weatherData = [
    {
        tag: "chiayi_country",
        place: "嘉義縣",
    },

    {
        tag: "new_taipei_city",
        place: "新北市",
    },

    {
        tag: "chiayi_city",
        place: "嘉義市",
    },

    {
        tag: "hsinchu_country",
        place: "新竹縣",
    },

    {
        tag: "hsinchu_city",
        place: "新竹市",
    },

    {
        tag: "taipei_city",
        place: "臺北市",
    },

    {
        tag: "tainan_city",
        place: "臺南市",
    },

    {
        tag: "yilan_country",
        place: "宜蘭縣",
    },

    {
        tag: "miaoli_country",
        place: "苗栗縣",
    },

    {
        tag: "yunlin_country",
        place: "雲林縣",
    },

    {
        tag: "hualien_country",
        place: "花蓮縣",
    },

    {
        tag: "taichung_city",
        place: "臺中市",
    },

    {
        tag: "taitung_country",
        place: "臺東縣",
    },

    {
        tag: "taoyuan_country",
        place: "桃園市",
    },

    {
        tag: "nantou_country",
        place: "南投縣",
    },

    {
        tag: "kaohsiung_city",
        place: "高雄市",
    },

    {
        tag: "kinmen_country",
        place: "金門縣",
    },

    {
        tag: "pingtung_country",
        place: "屏東縣",
    },

    {
        tag: "keelung_city",
        place: "基隆市",
    },

    {
        tag: "penghu_country",
        place: "澎湖縣",
    },

    {
        tag: "changhua_country",
        place: "彰化縣",
    },

    {
        tag: "lienchiang_country",
        place: "連江縣",
    },
];

const path = document.querySelectorAll("path")
const countyName = document.querySelector("#countyName");
const PoP = document.querySelector("#PoP");
const temperature = document.querySelector("#temperature");
const weatherImg = document.querySelector(".weatherImg");
const selector = document.querySelector("#selector");

var period = 0;

fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-509CE2AA-375E-4A2D-842A-A59BFAE06075")
    .then(res => res.json())
    .then(data => {
        console.dir(data)

        //時間段選項
        selector.innerHTML += '<option value="period0">' + data.records.location[0].weatherElement[0].time[0].startTime + '</option>'
        selector.innerHTML += '<option value="period1">' + data.records.location[0].weatherElement[0].time[1].startTime + '</option>'
        selector.innerHTML += '<option value="period2">' + data.records.location[0].weatherElement[0].time[2].startTime + '</option>'

        //更新資料
        function updateData(){
            for (let i = 0; i < data.records.location.length; i++) {
                weatherData[i].WxCode = parseInt(data.records.location[i].weatherElement[0].time[period].parameter.parameterValue)
                weatherData[i].PoP = data.records.location[i].weatherElement[1].time[period].parameter.parameterName
                weatherData[i].minT = data.records.location[i].weatherElement[2].time[period].parameter.parameterName
                weatherData[i].maxT = data.records.location[i].weatherElement[4].time[period].parameter.parameterName
            }
        }
        updateData();

        //監聽選擇時間段
        selector.addEventListener("change",
            function (event) {
                if (event.target.value == "period0") {
                    period = 0;
                }
                if (event.target.value == "period1") {
                    period = 1;
                }
                if (event.target.value == "period2") {
                    period = 2;
                }
                updateData();
                weatherData.forEach((county) => {
                    if (countyName.innerText == county.place) {
                        showData(county);
                    }
                })
            }
        )

        //監聽地圖
        path.forEach((element, index) => {
            element.addEventListener("mouseover",
                function () {
                    // console.log(element.getAttribute("data-name"))
                    weatherData.forEach((county) => {
                        if (element.getAttribute("data-name") == county.tag) {
                            showData(county);
                        }
                    })
                }
            )
        })
    })

function showData(county) {
    countyName.innerText = county.place;
    temperature.innerText = county.minT + " - " + county.maxT + "度";
    PoP.innerText = "降雨機率：" + county.PoP + "%";
    if (county.WxCode == 1) {
        weatherImg.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    if (county.WxCode == 2 || county.WxCode == 3) {
        weatherImg.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
    }
    if (county.WxCode > 3 && county.WxCode < 8) {
        weatherImg.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    }
    if ((county.WxCode > 7 && county.WxCode < 11) || (county.WxCode > 28 && county.WxCode < 42)) {
        weatherImg.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
    }
    if (county.WxCode > 10 && county.WxCode < 23) {
        weatherImg.innerHTML = '<i class="fa-solid fa-umbrella"></i>';
    }
    if (county.WxCode == 23 || county.WxCode == 42) {
        weatherImg.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
    }
    if (county.WxCode > 23 && county.WxCode < 29) {
        weatherImg.innerHTML = '<i class="fa-solid fa-smog"></i>';
    }
}