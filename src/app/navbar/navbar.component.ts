import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, LangSelectorComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
