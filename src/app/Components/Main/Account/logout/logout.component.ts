import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  Logout()
  {
    this.userService.Logout();
    if(!UserService.IsLoggin)
      this.router.navigateByUrl('/LoginPanel')
  }

  ngOnInit(): void {
  }

}
