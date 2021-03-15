import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTable } from './../../models/user';
import { UsersService } from 'src/app/services/users.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();
  usuarios: UserTable[] = [];

  constructor(private apiUser: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable(): void {
    this.apiUser.getAll()
      .pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.usuarios = data;
      });
  }

  onNew(): void {
    this.router.navigate(['/userNew']);
  }

  onEdit(id: number): void {
    this.router.navigate(['userEdit',id]);
  }


  onDelete(userId: number): void {
    if (window.confirm('Do you really want remove user')) {
      this.apiUser.delete(userId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {
          if (res) {
            window.alert('Eliminado con Exito!');
          }
        });
    }
  }

  ngOnDestroy(): void {

    this.destroy$.next({})
    this.destroy$.complete();
  }

}
