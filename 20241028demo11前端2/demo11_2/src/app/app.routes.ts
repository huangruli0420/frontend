import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
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
];
