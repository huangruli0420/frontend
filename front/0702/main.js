let obj = {
    name:"可口可樂",
    type:"臘腸狗",
    color:"奶茶",
    getName: function(){
        // console.log(this.name);
        return this.name;
    },
    setName: function(newName){
        this.name = newName;
    },
    getType(){//getType:function(){}
        return this.type;
    }
};

console.log(obj.getName())

obj.setName("百事可樂");

console.log(obj.getName())
console.log(obj.getType())
// console.log(obj.getColor())


const valInput = document.querySelector("#valInput")
const valInput2 = document.querySelector("#valInput2")
const selectVal = document.querySelector("#selectVal")
const btn = document.querySelector("#btn")

// btn.addEventListener("click",()=>{
//     console.log(valInput.value)
//     console.log(typeof(valInput.value));
//     //字串轉整數1
//     let x = Number(valInput.value)
//     console.log(x);
//     console.log(typeof(x));
//     //字串轉整數2
//     let y = parseInt(valInput.value)
//     console.log(y);
//     console.log(typeof(y));
// })

// btn.addEventListener("click",function(){
//     console.log(valInput.value)
// })

// switch
//根據日文程度,能做到哪個事情
/*
    switch(日文程度){
    case n1:
        去日本工作;
        break; //只能做這個 沒break:下面的也可以做
    
    case n2:
        進日本企業工作但還不能去日本工作
        break;

    case n3:
        可以被日本企業培訓;
        break;

    default:
        日文再加強;
        break;
    }
*/

const showText = document.querySelector("#showText");

function cal(sol){
    switch(selectVal.value){
        case("+"):
            sol = Number (valInput.value) + Number (valInput2.value);
            break;
        case("-"):
            sol = Number (valInput.value) - Number (valInput2.value);
            break;
        case("*"):
            sol = Number (valInput.value) * Number (valInput2.value);
            break;
        case("/"):
            sol = Number (valInput.value) / Number (valInput2.value);
            break;
    }
    console.log(valInput.value);
    console.log(valInput2.value);
    console.log(sol);
    showText.innerText = sol;
}


btn.addEventListener("click", cal
    // function(){
    //     var sol = 0;
    //     switch(selectVal.value){
    //         case("+"):
    //             sol = Number (valInput.value) + Number (valInput2.value);
    //             break;
    //         case("-"):
    //             sol = Number (valInput.value) - Number (valInput2.value);
    //             break;
    //         case("*"):
    //             sol = Number (valInput.value) * Number (valInput2.value);
    //             break;
    //         case("/"):
    //             sol = Number (valInput.value) / Number (valInput2.value);
    //             break;
    //     }
    // console.log(valInput.value);
    // console.log(valInput2.value);
    // console.log(sol);
    // }
)

// Math

//.random() 產生>=0, <1的亂數
//.floor() 無條件捨去
//.ceil() 無條件進位
//.round() 四捨五入
//.abs() 絕對值