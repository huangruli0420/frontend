import { Component } from '@angular/core';

@Component({
  selector: 'app-if-practice',
  standalone: true,
  imports: [],
  templateUrl: './if-practice.component.html',
  styleUrl: './if-practice.component.scss'
})
export class IfPracticeComponent {

  // if練習
ifData = [
  {name:"玩家A", age: 18, sex:"F",},
  {name:"玩家B", age: 12, sex:"F",},
  {name:"玩家C", age: 28, sex:"M",},
  {name:"玩家D", age: 8 , sex:"M",},
  {name:"玩家E", age: 23, sex:"F",},
  {name:"玩家F", age: 38, sex:"M",}
]

filteredData = this.ifData

allPlayer(){
  this.filteredData = this.ifData
}
malePlayer(){
  this.filteredData = [];
  for(let data of this.ifData){
    if(data.sex == "M"){
      this.filteredData.push(data)
    }
  }
}
femalePlayer(){
  this.filteredData = [];
  for(let data of this.ifData){
    if(data.sex == "F"){
      this.filteredData.push(data)
    }
  }
}
//if練習的另一種解法
filteredData2 = this.ifData

changeSex(sex: string){
  this.filteredData2 = [];
  if(sex == "all"){
    this.filteredData2 = this.ifData
    return;
  }
  for(let data of this.ifData){
    if(sex == data.sex){
      this.filteredData2.push(data)
    }
  }
}

}
