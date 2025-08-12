import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'site_pessoal';
}
