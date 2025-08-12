import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { skills } from '../model/skills.model';
import {
  LucideAngularModule,
  Palette,
  Compass,
  Server,
  CodeXml,
} from 'lucide-angular';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly palette = Palette;
  readonly compass = Compass;
  readonly server = Server;
  readonly code = CodeXml;

  skills: skills[] = [];

  constructor(private translate: TranslateService) {
    this.translate.stream('about.skills').subscribe((translations) => {
      this.skills = Object.values(translations);
      console.log(this.skills);
    });
  }
}
