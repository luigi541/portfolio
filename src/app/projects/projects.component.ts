import { Component, OnInit, Signal } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { project } from '../model/projects.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Signal<project[]>;

  constructor(private projectService: ProjectsService) {
    this.projects = this.projectService.projects;
  }
}
