import { Component, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AfterViewInit, ViewChild } from '@angular/core';
import { NgIfContext } from '@angular/common';
import { AppComponent } from "../../app.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule} from  '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Service } from '../../../service/service.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../dialog/dialog.component';

@Component({
  selector: 'app-icon-practice',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatIconModule, MatTableModule, MatPaginatorModule, AppComponent, FormsModule, ReactiveFormsModule,
    MatDatepickerModule,MatFormFieldModule,MatInputModule,
  ], //import 圖標、表格跟表格換頁
  templateUrl: './icon-practice.component.html',
  styleUrl: './icon-practice.component.scss'
})

export class IconPracticeComponent {

  // 注入dialog，要先import inject
  readonly dialog = inject(MatDialog);

  showDialog(){
    // 開始dialog，open裡面放dialog的本體TS名稱和要傳送過去的資料，可以是一個物件
    const dialogRef = this.dialog.open(DialogComponent,{
      // 這個資料物件會傳送過去DialogComponent，名稱一樣，可以在dialog本體的HTML上使用
        data:{name:'A',age:'12'},
      })

    // 按下按鈕觸發dialog本體的goBack()方法，this.dialogRef.close()裡面的參數會再回傳過來
    // 若dialogue顯示時不需要取得使用者輸入或是不需回傳資料則不用寫這段
    // 也可以在要呼叫dialogue本體的頁面新增一個未定義的資料來接這裡的result
    // 等於兩邊可互相傳資料也可以選擇不傳
      dialogRef.afterClosed().subscribe(result =>{console.log(result);
      })
  }


  constructor(private service: Service) {}
  minDate = new Date();
  sDate= new Date('2024/11/6')


  //即時搜尋
  inputData: string = '';
  changeInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    let filteredData: UserElement[] = [];
    for (let data of USER_DATA) {
      if (data.name.indexOf((event.target as HTMLInputElement).value) != -1) {
        filteredData.push(data);
      }
    }
    this.dataSource.data = filteredData;
  }


  //表格欄位和要顯示哪個表格
  displayedColumns: string[] = ['id', 'name', 'age', 'sex'];
  dataSource = new MatTableDataSource<UserElement>(USER_DATA); //這裡改介面跟資料名字

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // ================================================================
  //排序資料
  ngOnInit(){
    this.dataSource.data.sort((a, b)=>{
      if(a.id < b.id){
        return -1;
      }
      if(a.id > b.id){
        return 1;
      }
      return 0 ;
    })
    console.log(USER_DATA);
  }

}

// 假使用者資料介面跟資料 ==============================
export interface UserElement {
  id: number;
  name: string;
  age: number;
  sex: string;

}

const USER_DATA: UserElement[] = [
  { id: 10, name: 'A10', age: 38, sex: 'F' },
  { id: 9, name: 'A9', age: 36, sex: 'F' },
  { id: 1, name: 'A1', age: 12, sex: 'M' },
  { id: 2, name: 'A2', age: 18, sex: 'F' },
  { id: 3, name: 'A3', age: 21, sex: 'M' },
  { id: 7, name: 'A7', age: 30, sex: 'F' },
  { id: 4, name: 'A4', age: 25, sex: 'M' },
  { id: 5, name: 'A5', age: 26, sex: 'M' },
  { id: 8, name: 'A8', age: 32, sex: 'M' },
  { id: 6, name: 'A6', age: 27, sex: 'M' },
];

// ===============================================

// 元素週期表介面跟資料=============================
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
// ==================================================
