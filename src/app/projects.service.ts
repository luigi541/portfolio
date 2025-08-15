import { Injectable, signal } from '@angular/core';
import { ProjectsMeta, project } from './model/projects.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects = signal<project[]>([]);

  constructor(private translate: TranslateService) {
    this.translate.stream('projects.items').subscribe((items: any[]) => {
      this.projects.set(
        items.map((item, idx) => ({
          ...item,
          ...this.projectsMeta[idx],
        }))
      );
    });
  }

  projectsMeta: ProjectsMeta[] = [
    {
      tech: ['React', 'Chart.js', 'Local Storage', 'CSS3'],
      github: '#',
      live: '#',
    },
    {
      tech: ['JavaScript', 'Recipe API', 'HTML5', 'CSS3'],
      github: '#',
      live: '#',
    },
    {
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
      github: '#',
      live: '#',
    },
  ];
}
