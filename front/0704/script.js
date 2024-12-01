let arr = []

//從request url拿資料
fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-509CE2AA-375E-4A2D-842A-A59BFAE06075")
//轉換成js格式
.then(res => res.json())
//對傳回來的資料進行操作
.then(data => {
    console.dir(data); //fetch為非同步 會最後才做
    arr.push(data)
})

console.log(arr); //fetch為非同步 先做這個再fetch所以不會印出東西

const btn = document.querySelector("#btn")

btn.addEventListener("click",
    () => {
        console.log(arr); //點擊時已經fetch完了所以可以印出東西
    }
)