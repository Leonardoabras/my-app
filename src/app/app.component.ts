import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Leonardo';
  userData = {
  email: 'teste@teste.com',
  role: 'admin'
  }
  title = 'my-app';
}
