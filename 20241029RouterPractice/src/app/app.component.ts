import { Component, NgModule } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { Person, PersonData, TestInterface } from './api-interface/api.interface';
import { HttpClientService } from './http-service/http-client-service';
import { MatIconModule } from '@angular/material/icon';
import { Service } from '../service/service.component';
import { IfPracticeComponent } from "./nav/if-practice/if-practice.component";
import { IconPracticeComponent } from "./nav/icon-practice/icon-practice.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterLinkActive,
            FormsModule,
            MatIconModule,
            IfPracticeComponent,
            IconPracticeComponent,
            MatProgressSpinnerModule,
            CommonModule,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements TestInterface {
  title = '20241029RouterPractice';

  //注入api,用ts檔裡面的class名稱
  constructor(private http: HttpClientService, private router: Router,private service: Service) { }

  // spinner
  loading$:any;
  ngOnInit(): void {
    //將宣告的變數loading$相等於service裡面的loading$，_底線跟$錢字號為一種命名方式，通常_代表private，$代表只能被觀測
    this.loading$ = this.service.loading$;
  }




  //res是資料的變數名稱
  // ngOnInit(): void {
  //   this.http.getApi('https://api.freeapi.app/api/v1/public/randomusers')
  //   .subscribe((res:any)=> console.log(res));
  // }


  //api-interface
  name: string = '';
  getName() {
    return ' ';
  };
  data!: Person
  data2!: PersonData

  data3: Person = {
    name: "xdd",
    age: 123
  }
  //============================

  //  arrayData3 = [
  //   { id:1,
  //     name:'a',
  //     userData:[
  //       {userId:'1'}
  //     ]
  //   },
  //   { id:2,
  //     name:'b',
  //     userData:[
  //       {userId:'2'}
  //     ]
  //   },
  //   { id:3,
  //     name:'c',
  //     userData:[
  //       {userId:'3'}
  //     ]
  //   }
  // ]

  // ngOnInit(){
  //   // let arrayData = [10,20,3,5,8,9,23,657,123,67];
  //   // for(let i = 0; i < arrayData.length;i++){
  //   //   if(arrayData[i] == 9){
  //   //     console.log(i);
  //   //   }
  //   // }
  //     for(let data of this.arrayData3){
  //       for(let user of data.userData){
  //       console.log(user.userId);
  //       }
  //     }
  // }


}
