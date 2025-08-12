import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private usersSubject = new BehaviorSubject<User[]>([]);

  constructor() {
    // Agregar algunos usuarios de ejemplo
    this.users = [
      {
        id: 1,
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan.perez@email.com',
        phone: '+34 123 456 789',
        birthDate: new Date('1990-05-15'),
        address: 'Calle Mayor 123',
        city: 'Madrid',
        country: 'España',
        createdAt: new Date()
      },
      {
        id: 2,
        firstName: 'María',
        lastName: 'García',
        email: 'maria.garcia@email.com',
        phone: '+34 987 654 321',
        birthDate: new Date('1985-08-22'),
        address: 'Avenida Principal 456',
        city: 'Barcelona',
        country: 'España',
        createdAt: new Date()
      }
    ];
    this.usersSubject.next(this.users);
  }

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  createUser(user: User): Observable<User> {
    return new Observable(observer => {
      const newUser: User = {
        ...user,
        id: this.users.length + 1,
        createdAt: new Date()
      };
      
      this.users.push(newUser);
      this.usersSubject.next([...this.users]);
      observer.next(newUser);
      observer.complete();
    });
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
