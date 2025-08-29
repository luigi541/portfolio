import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LucideAngularModule, Mail, Copy } from 'lucide-angular';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contacts',
  imports: [TranslatePipe, LucideAngularModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  readonly mail = Mail;
  readonly copy = Copy;

  private _snackBar = inject(MatSnackBar);

  constructor(
    private translate: TranslateService,
    private clipboard: Clipboard
  ) {}

  durationInSeconds = 3;

  openSnackBar(message: string) {
    const fullMessage = this.translate.instant(message);
    if (fullMessage) {
      this.clipboard.copy(fullMessage);
      this._snackBar.open(
        this.translate.instant('contact.snackbar.copy'),
        this.translate.instant('contact.snackbar.close'),
        {
          duration: this.durationInSeconds * 1000,
          panelClass: ['snackbar-success'],
        }
      );
    }
  }
}
