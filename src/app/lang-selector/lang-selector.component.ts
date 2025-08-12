import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LucideAngularModule, Languages } from 'lucide-angular';

@Component({
  selector: 'app-lang-selector',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.css',
})
export class LangSelectorComponent {
  readonly languages = Languages;
  language: string = 'pt';
  constructor(private translate: TranslateService) {}

  setLanguage(value: string) {
    this.translate.use(value);
    this.language = value;
  }
}
