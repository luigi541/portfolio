import { Injectable, signal } from '@angular/core';
import { project } from './model/projects.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects = signal<project[]>([]);

  constructor(private translate: TranslateService) {
    this.translate.stream('projects.items').subscribe((items: project[]) => {
      this.projects.set(items);
    });
  }
}
