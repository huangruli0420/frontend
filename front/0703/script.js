// 陣列 [] array
let arr = [1, "cool", true, [1, 2, 3], {name:"米諾", type:"臘腸"}]

console.log(arr);

// .push 從尾巴新增元素
arr.push("王正崴真帥")
console.log(arr);

// .pop 從尾巴刪除元素
arr.pop()
console.log(arr);

//.unshift() 從頭新增元素
arr.unshift("陳珮怡很漂亮")
console.log(arr);

//.shift() 從頭刪除元素
arr.shift()
console.log(arr);

console.log(arr[3][2]);

// .splice(起點, 刪除數量, 新增或替代的元素)
let spArr = [1, 2, 3]

// 新增"cool"在[1]的位置 不刪除元素
spArr.splice(1, 0, "cool")
console.log(spArr);

//刪除
spArr.splice(1, 1)
console.log(spArr);

//替代
spArr.splice(1, 1, "PoP")
console.log(spArr);

//陣列轉字串
let joinArr = [1, 2, 3, 4, 5, 6]
console.log(joinArr.join());

//字串
let str = "Today is a good day!!"
console.log(str.length);
console.log(str[6]);

// .toUpperCase() 全部變大寫
console.log(str.toUpperCase());

// .toLowerCase() 全部變小寫
console.log(str.toLowerCase());

//以下回傳boolean
//.startsWith() 字串開頭是否包含
console.log(str.startsWith("go"));

//.endsWith() 字串尾巴是否包含
console.log(str.endsWith("y"));

// .includes() 字串是否包含
console.log(str.includes(" "));

// .split() 字串轉陣列
console.log(str.split("")); //每個字都拆
console.log(str.split(" "));//遇空白就拆

// for迴圈
// for(起始值; 執行條件; 迭代)
for(let i = 0; i < 5; i++){
    console.log(i);
}

let strArr = str.split(" ")
for(let i = 0; i < strArr.length; i++){
    console.log(strArr[i]);
}

//把1~10的奇偶數分開印出來
let single = []
let double = []
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        double.push(i);
    }
    else{
        single.push(i);
    }
}
console.log(single);
console.log(double);