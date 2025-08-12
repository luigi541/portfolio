import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {
  LucideAngularModule,
  Mail,
  CircleArrowDown,
  FolderKanban,
  UserStar,
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly mail = Mail;
  readonly circleArrowDown = CircleArrowDown;
  readonly folder = FolderKanban;
  readonly contact = UserStar;
}
