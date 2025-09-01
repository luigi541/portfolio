import { Component, Signal } from '@angular/core';
import { project } from '../model/projects.model';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import { PaginationService } from '../pagination.service';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    TranslatePipe,
    LucideAngularModule,
    ProjectCardComponent,
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly chevronLeft = ChevronLeft;
  readonly chevronRight = ChevronRight;

  constructor(public paginationService: PaginationService) {}
}
