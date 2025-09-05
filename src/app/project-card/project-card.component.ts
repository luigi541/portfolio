import { Component, Input } from '@angular/core';
import { LucideAngularModule, Radio } from 'lucide-angular';
import { project } from '../model/projects.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  imports: [LucideAngularModule, TranslatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: project;
  readonly radio = Radio;
}
