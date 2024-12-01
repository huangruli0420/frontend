
import { PieAnimationOptions } from './../../../../node_modules/chart.js/dist/types/index.d';
import { Component } from '@angular/core';
import { Service } from '../../../service/service.component';
import { ServicePracticeComponent } from './service-practice/service-practice.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Router,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-input-practice',
  standalone: true,
  imports: [ServicePracticeComponent,
            ReactiveFormsModule,
            MatTabsModule,
            RouterLink,
            RouterLinkActive,
            RouterOutlet,
            FormsModule,
            CommonModule,
            MatProgressSpinnerModule
  ],
  templateUrl: './input-practice.component.html',
  styleUrl: './input-practice.component.scss'
})
export class InputPracticeComponent {

  constructor(private service: Service) {
  }
  //Service練習，service.ts、icon.ts、app.ts
  //service練習input，與用路由可以直接設定變數不同，若要直接用組件顯示並改變組件的變數則這一層要有原本的要賦值的變數
  userName: string = "xdd";
  ngOnInit(): void {
    this.service.userName = this.userName;
    console.log(this.service.userName);
    //製作圓餅圖
    this.createPie();
  }
  //output
  showNewName(event: string){
    alert(event);
    console.log(event);
  }
//========================================

// form表單
// validator需import {Validators } from '@angular/forms';
// Validators.required為設定此欄位必填
form1: FormGroup= new FormGroup({
account: new FormControl("",Validators.required),
password: new FormControl("",Validators.required),
email: new FormControl("",[Validators.required,Validators.email])
})
showFormData(){
  console.log(this.form1.value);
}

// TABS
links = [
  {tabName: 'First', path: '/test'},
  {tabName: 'Second', path: '/test2'},
  {tabName: 'Third', path: '/test3'},
]
activeLink = this.links[0].tabName

// 一開啟頁面就會顯示圓餅圖的方法，寫在ngOnInIt裡面了
createPie(){
  // 獲取canvas元素
  let ctx = document.getElementById('pieChart') as HTMLCanvasElement;

  let pieData ={
    // X軸文字
    labels:["餐費","交通費","租金"],
    datasets:[
      {
        // 數據
        data:[2000,3000,9000],
        // 線與邊框顏色
        backgroundColor:[
          '#ff99cc',
          '#ffff99',
          '#66ccff',
        ],
        // 滑鼠移到圖表上的偏移量
        hoverOffset:50,
      }
    ]
  }

  //創建圖表
  let pieChart = new Chart(ctx,{
    // 圖表類型和資料來源
    type:'doughnut',
    data:pieData,
  });
}

// select
selectData: string="";
showSelectValue(){
  alert(this.selectData)
  console.log(this.selectData);

}


//ngClass
h3CssBoolean:Boolean = true;
// 如果這個方法不寫else只有if則會有黃蚯蚓
getClassCss(){
  if(this.h3CssBoolean == true){
    return 'test2';
  }else{
    return 'test1';
  }
}

}
