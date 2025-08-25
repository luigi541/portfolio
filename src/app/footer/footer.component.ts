import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule, Mail } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly mail = Mail;
}
