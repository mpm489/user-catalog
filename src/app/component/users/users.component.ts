import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Response } from '../../interface/response.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  response: Response;

  constructor(private userService: UserService) {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(15).subscribe(
      (results: Response) => {
        this.response = results;
      }
    );
  }

}
