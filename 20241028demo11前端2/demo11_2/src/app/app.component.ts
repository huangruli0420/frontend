import { routes } from './app.routes';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'demo11_2';

  constructor(private router:Router) {}

  // ngOnInit(): void {
  //   this.router.navigateByUrl('/first')
  //   this.router.navigate(['/first'])
  // }

  navigateToFirst(){
        this.router.navigateByUrl('/first')
  }
  navigateToSecond(){
    this.router.navigateByUrl('/second')
}
  // navigateToHome(){
  //   this.router.navigateByUrl('')
  // }
}
