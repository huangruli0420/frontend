import { Routes } from '@angular/router';
import { ArrayPracticeComponent } from './nav/array-practice/array-practice.component';
import { BindingPracticeComponent } from './nav/binding-practice/binding-practice.component';
import { HtmlPracticeComponent } from './nav/html-practice/html-practice.component';
import { RouterPracticeComponent } from './nav/router-practice/router-practice.component';
import { NavComponent } from './nav/nav.component';
import { FirstComponent } from './nav/router-practice/first/first.component';
import { SecondComponent } from './nav/router-practice/second/second.component';
import { IfPracticeComponent } from './nav/if-practice/if-practice.component';
import { ApiPracticeComponent } from './nav/api-practice/api-practice.component';
import { IconPracticeComponent } from './nav/icon-practice/icon-practice.component';
import { InputPracticeComponent } from './nav/input-practice/input-practice.component';

export const routes: Routes = [
  {path:'nav', component: NavComponent,
    children:[
      {path:'htmlPractice',component: HtmlPracticeComponent},
      {path:'bindingPractice',component: BindingPracticeComponent},
      {path:'arrayPractice',component: ArrayPracticeComponent},
      {path:'ifPractice',component: IfPracticeComponent},
      {path:'apiPractice',component: ApiPracticeComponent},
      {path:'iconPractice',component: IconPracticeComponent},
      {path:'inputPractice',component: InputPracticeComponent},

      {path:'routerPractice',component: RouterPracticeComponent,
        children: [
          { path: 'first', component: FirstComponent,
            children: [
              {path:'child-a', component:SecondComponent},
              {path:'', redirectTo:'/first/child-a', pathMatch: 'full'}
            ]
          },
          { path: 'second', component: SecondComponent},
          // // URL不存在時會導入到的頁面
          // { path: '**', component: FirstComponent},
          // URL需與設定的路徑完全一樣才會導向
          { path:'abc',redirectTo:'/first', pathMatch:'full'},
          // 只要路徑前導開頭一樣就會導向，例如:http://localhost:4200/def/ghi/jkl
          { path:'def',redirectTo:'/first', pathMatch:'prefix'}
          // 若輸入 http://localhost:4200/ ，URL在主頁後的斜線後面沒東西則會導向/second
          // { path:'',redirectTo:'/second', pathMatch:'full'},
        ]
      }
    ]
  }

];
