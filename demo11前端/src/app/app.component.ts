import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Components1Component } from "./components1/components1.component";
import { Components2Component } from "./components2/components2.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  //要先匯入FormsModule才能使用ngmodel
  imports: [RouterOutlet, Components1Component, Components2Component,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'demo11';
  // 設定變數跟方法
  testTitle: String='我是標題';
  testContent: String='內容是我';
  testImage: String='https://steamuserimages-a.akamaihd.net/ugc/2113934678217099319/B7FB29BF134D2EC6398E27FA909D9F257ED57425/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true';
  // testImage2: String="";

  showAlert() {
    alert("還在GO")
  }

  // 事件繫結對應的方法，?代表可有可無，可以不用給預設值
  inputData?: string;
  showInputData() {
    console.log(this.inputData);
    alert(this.inputData);
  }

  //回家作業
  level: number = 1 ;
  attack: number = 10;
  defense: number = 10;
//變數名稱後面加?(問號)可以省略初始值，但若想有方法要使用這個變數就要改成!(驚嘆號)
  input!: number;

//每升一級，攻擊乘3，防禦乘2
  levelUp() {
    this.level += 1;
    this.attack *= 3;
    this.defense *= 2;
  }

  levelDown() {
    if(this.level==1){
      alert("最低就1等了還想怎樣");
      return;}
    this.level -= 1;
    this.attack /= 3;
    this.defense /= 2;
  }

//直接改變等級，攻擊力防禦力也相應改變，加上對輸入非數字或負數的防呆
  levelChange() {
    if(isNaN(Number(this.input))){
      alert("輸入數字辣")
      return;
    }
    if(this.input<1){
      alert("誰跟你降級");
      return;
    }

    this.attack = this.attack*Math.pow(3,(this.input-this.level));
    this.defense = this.defense*Math.pow(2,(this.input-this.level));
    this.level = this.input;

  //每升一級攻擊+3，防禦+2的寫法
  //   this.attack += ((this.input-this.level)*3);
  //   this.defense +=  ((this.input-this.level)*2);
  //   this.level += (this.input-this.level);
  }

//讓等級、攻擊力和防禦力回到初始值
  levelReset() {
    this.level =  1;
    this.attack = 10;
    this.defense = 10;
  }
introduction: String="註解:角色初始等級為1，初始攻擊/防禦為10，每提升1級攻擊*3/防禦*2，降級則除3跟2"

//類型轉換練習

printOut1(){
    for(let i=1; i<51 ; i++){
      console.log(i);
    }
}

printOut2() {
  for(let i=1; i<51 ; i++){
    if((i%3) == 2){
      console.log(i);
    }
  }
}

printOut3() {
let data =[ {name:'小明',age:10,number:1},
            {name:'小陳',age:24,number:2},
            {name:'小王',age:16,number:3}];
// // 這邊的data也會隨著後面ForEach改變
// console.log(data);

data.forEach((item, index) =>{
  if(item.name == '小王'){
    item.age = 18;
  }
})
// for(let i=1; i<data.length; i++){
//   if(data[i].name == '小王'){
//     data[i].age == 18
//   }
// }
console.log(data);
}


}
