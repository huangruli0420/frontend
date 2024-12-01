import { Component,Input,output,Output,EventEmitter  } from '@angular/core';
import { Service } from '../../../../service/service.component';

@Component({
  selector: 'app-service-practice',
  standalone: true,
  imports: [],
  templateUrl: './service-practice.component.html',
  styleUrl: './service-practice.component.scss'
})
export class ServicePracticeComponent {

  //Service儲存資料練習
  //用input，在上一層使用這個組件並在html標籤上直接用上一層的變數給這層的變數賦值，這個原本有值的變數必須是要在上一層
  @Input() iconUserName!:string;

  //用路由直接設定這一層的變數等於service裡面的變數
  constructor(private service:Service) {
  }
  iconUserName2!:string;

  changeUserName = output<string>();
  // @Output() changeUserName = new EventEmitter<string>();

  ngOnInit(): void {
    this.iconUserName2=this.service.userName
  //output
  this.changeUserName.emit('aaa');
  }
  //老師寫的output
  user: string = "BBB"
  TEST() {
    this.changeUserName.emit(this.user);
  }



}
