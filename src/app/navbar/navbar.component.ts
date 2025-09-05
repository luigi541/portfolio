import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, LangSelectorComponent, MobileMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
