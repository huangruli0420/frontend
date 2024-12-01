const inputNumber = document.querySelector("#inputNumber");
const btn = document.querySelector("#btn");
const nPrime = document.querySelector("#nPrime");
const ans = document.querySelector("#ans");

function findPrime(){
    let x = Number(inputNumber.value);
    let n = 1;
    let answer = [2];
    if(x < 2){
        n = 0;
        answer.splice(0, 1);//從第0個位置刪除1個元素
        console.log(answer);
        console.log(n);
        return;
    }
    if(x < 3){
        console.log(answer);
        console.log(n);
        return;
    }
    else{
        for(let i = 3; i <= x; i++){
            for(let j = 2; j <= i; j++){
                if(i % j == 0){
                    break;
                }
                if(j == Math.floor(Math.sqrt(i)) || j == i-1){//i=3的情形
                    answer[n] = i;
                    n++;
                    break;
                }
            }
        }
    }
    console.log(answer);
    console.log(n);
    nPrime.innerText = "共" + n + "個";
    ans.innerText = answer.join(", "); //轉字串可以換行
}

btn.addEventListener("click", findPrime)