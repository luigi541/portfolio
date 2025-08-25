import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule, Mail } from 'lucide-angular';

@Component({
  selector: 'app-contacts',
  imports: [TranslatePipe, LucideAngularModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  readonly mail = Mail;
}
