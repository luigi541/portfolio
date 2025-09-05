import { Component } from '@angular/core';
import { LucideAngularModule, Menu } from 'lucide-angular';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-menu',
  imports: [
    LucideAngularModule,
    LangSelectorComponent,
    TranslatePipe,
    CommonModule,
  ],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css',
})
export class MobileMenuComponent {
  open: boolean = false;
  readonly menu = Menu;

  scrollSection(section: string): void {
    const goTO = document.getElementById(section);
    if (goTO) {
      this.open = false;
      goTO.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
