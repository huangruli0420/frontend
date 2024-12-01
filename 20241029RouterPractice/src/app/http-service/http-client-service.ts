import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
//上面這段是service儲存資料和有引入HttpClient的TS的固定寫法，不會有@Component

export class HttpClientService{
  //先把Angular抓路由的組件寫入這個class的建構方法，之後其他方法就只要引入這個class就可以引入方法和HttpClient
  constructor(private http:HttpClient){}

  //讀取
  getApi<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  //新增
  postApi(url:string, postData: any){
    return this.http.post(url, postData);
  }

  //更新
  putApi(url:string,postData: any){
    return this.http.put(url, postData);
  }

  //刪除
  deleteApi(url:string){
    return this.http.delete(url);
  }

}
