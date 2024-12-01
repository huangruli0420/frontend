import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
//上面這段是service儲存資料和有引入HttpClient的TS的固定寫法，不會有@Component

export class Service {

   //Service練習，service.ts、input.ts、app.ts
    userName!:string;

    //
    changeDateFormat(dateData: Date, dateType : string = '-'){
      let year;
      let month;
      let date;
      if (dateData) {
        year = dateData.getFullYear();
        month = dateData.getMonth() + 1;
        if (String(month).length == 1){
          month = '0' + month;
        }
        date = dateData.getDate();
        if(String(date).length == 1){
          date = '0' + date;
        }
        return year + dateType + month + dateType + date;
      }else{
        return '';
      }
    }

    // spinner
    private _loading$ = new BehaviorSubject<boolean>(false);
    loading$ = this._loading$.asObservable();

    show(){
      this._loading$.next(true);
    }

    hide(){
      this._loading$.next(false);
    }
}
