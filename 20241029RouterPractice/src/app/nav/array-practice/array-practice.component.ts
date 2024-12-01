import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-array-practice',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './array-practice.component.html',
  styleUrl: './array-practice.component.scss'
})
export class ArrayPracticeComponent {

// 練習1
  arrayData3 = [
    { id:1,
      name:'a',
      userData:[
        {userId:'1'}
      ]
    },
    { id:2,
      name:'b',
      userData:[
        {userId:'2'}
      ]
    },
    { id:3,
      name:'c',
      userData:[
        {userId:'3'}
      ]
    }
  ]

  ngOnInit(){
    // let arrayData = [10,20,3,5,8,9,23,657,123,67];
    // for(let i = 0; i < arrayData.length;i++){
    //   if(arrayData[i] == 9){
    //     console.log(i);
    //   }
    // }
      for(let data of this.arrayData3){
        for(let user of data.userData){
        console.log(user.userId);
        }
      }
  }

//for迴圈印按鈕
arrayButton=[
    {
      link: "/nav/htmlPractice",
      linkActive: "active",
      tagName: "Html練習"
    },
    {
      link: "/nav/bindingPractice",
      linkActive: "active",
      tagName: "Binding練習"
    },
    {
      link: "/nav/routerPractice",
      linkActive: "active",
      tagName: "Router練習"
    },
    {
      link: "/nav/arrayPractice",
      linkActive: "active",
      tagName: "Array練習"
    },
    {
      link: "/nav/ifPractice",
      linkActive: "active",
      tagName: "if練習"
    },
    {
      link: "/nav/apiPractice",
      linkActive: "active",
      tagName: "api練習"
    },
    {
      link: "/nav/iconPractice",
      linkActive: "active",
      tagName: "Icon練習"
    },
    {
      link: "/nav/inputPractice",
      linkActive: "active",
      tagName: "Input練習"
    },

]

// 練習2
  userArray = [
    {
      userName: '玩家A',
      lev: 10,
      props: [
        {
          propsName: '蘑菇',
          amount: 5,
        },
        {
          propsName: '金幣',
          amount: 15,
        }
      ]
    },
    {
      userName: '玩家B',
      lev: 15,
      props: [
        {
          propsName: '龜殼',
          amount: 1,
        },
        {
          propsName: '砲彈',
          amount: 15,
        }
      ]
    },
  ]



}
