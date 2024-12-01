
import { Component, Input } from '@angular/core';
import { HttpClientService } from '../../http-service/http-client-service';
import { CommonModule } from '@angular/common';
import { DogApiResponse, DogData } from '../../api-interface/api.interface';
import { MatIconModule } from '@angular/material/icon';
import { Service } from '../../../service/service.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-api-practice',
  standalone: true,
  imports: [CommonModule,MatIconModule, MatProgressSpinnerModule],
  templateUrl: './api-practice.component.html',
  styleUrls: ['./api-practice.component.scss'],
})
export class ApiPracticeComponent {
  constructor(private http: HttpClientService,private service: Service) { }

  // getRandomUsers
  // getUserData() {
  //   this.http.getApi('https://api.freeapi.app/api/v1/public/randomusers')
  //     .subscribe((res) => console.log(res));
  // }

  // getDogs
  dogs2?: DogApiResponse;
  dogs: DogData[] = [];

  // spinner
  loading$:any;
  getDogData() {
    // this.service.show();
    this.http.getApi<DogApiResponse>('https://api.freeapi.app/api/v1/public/dogs')
    .subscribe((res) => console.log(res));// 查看資料
      // 在這裡使用 res.data.data 來訪問狗資料陣列
    this.http.getApi<DogApiResponse>('https://api.freeapi.app/api/v1/public/dogs')
      .subscribe((res) => { this.dogs2 = res})
    this.http.getApi<DogApiResponse>('https://api.freeapi.app/api/v1/public/dogs')
    .subscribe((res) => { this.dogs = res.data.data})
    // this.service.hide();
  }
}
