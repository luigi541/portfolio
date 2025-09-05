import { Injectable, computed, signal } from '@angular/core';
import { ProjectsService } from './projects.service';
import { project } from './model/projects.model';

type Pager = {
  perPage: number;
  currentPage: ReturnType<typeof signal<number>>;
  totalPages: ReturnType<typeof computed<number>>;
  pages: ReturnType<typeof computed<number[]>>;
  visible: ReturnType<typeof computed<project[]>>;
  goToPage: (page: number) => void;
  next: () => void;
  prev: () => void;
};

@Injectable({ providedIn: 'root' })
export class PaginationService {
  private allProjects = signal<project[]>([]);

  constructor(private projectsService: ProjectsService) {
    this.allProjects = projectsService.projects;
  }

  private makePager(perPage: number): Pager {
    const currentPage = signal(1);

    const totalPages = computed(() => {
      const n = this.allProjects().length;
      const k = Math.max(1, perPage);
      return Math.max(1, Math.ceil(n / k));
    });

    const pages = computed(() =>
      Array.from({ length: totalPages() }, (_, i) => i + 1)
    );

    const visible = computed(() => {
      const projects = this.allProjects();
      const k = Math.max(1, perPage);
      const start = (currentPage() - 1) * k;
      return projects.slice(start, start + k);
    });

    const goToPage = (page: number) =>
      currentPage.set(Math.min(Math.max(1, page), totalPages()));

    const next = () => {
      if (currentPage() < totalPages()) currentPage.update((p) => p + 1);
    };
    const prev = () => {
      if (currentPage() > 1) currentPage.update((p) => p - 1);
    };

    return {
      perPage,
      currentPage,
      totalPages,
      pages,
      visible,
      goToPage,
      next,
      prev,
    };
  }

  // Use these in the template with Tailwind visibility utilities
  readonly mobile = this.makePager(1); // phones
  readonly desktop = this.makePager(3); // md+
}
