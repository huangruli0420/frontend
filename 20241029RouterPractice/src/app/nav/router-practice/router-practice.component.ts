import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router-practice',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './router-practice.component.html',
  styleUrl: './router-practice.component.scss'
})
export class RouterPracticeComponent {
  constructor(private router: Router) { }

  // ngOnInit(): void {
  //   this.router.navigateByUrl('/first')
  //   this.router.navigate(['/first'])
  // }

  navigateToFirst() {
    this.router.navigateByUrl('/first')
  }
  navigateToSecond() {
    this.router.navigateByUrl('/second')
  }
  // navigateToHome(){
  //   this.router.navigateByUrl('')
  // }




}
