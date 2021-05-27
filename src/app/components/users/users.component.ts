import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]=[];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((users)=>{ 
      this.users = users;
    });

  }

}
