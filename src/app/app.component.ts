import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  showMenuBar:boolean = false;
  constructor(private authService:AuthService) {

  }
  ngOnInit() {
    this.authService.showMenubarEmitter.subscribe(
      show => this.showMenuBar = show
    );
  }
}
