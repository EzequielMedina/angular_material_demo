import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form';
import { MaterialDemoComponent } from './components/material-demo/material-demo';
import { NameFormatPipe } from './pipes/name-format-pipe';
import { DateFormatPipe } from './pipes/date-format-pipe';
import { UserService } from './services/user';
import { User } from './models/user';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserFormComponent,
    MaterialDemoComponent,
    NameFormatPipe,
    DateFormatPipe,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Gestión de Usuarios';
  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'phone', 'birthDate', 'city', 'country'];

  constructor(private userService: UserService) {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getFullName(user: User): string {
    return `${user.firstName || ''} ${user.lastName || ''}`.trim();
  }
}
