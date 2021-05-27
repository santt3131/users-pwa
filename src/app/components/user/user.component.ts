import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe((user)=>{
        if(!user){
          return this.router.navigateByUrl('/');
        }
        this.user = user[0];
    });


  }

}
