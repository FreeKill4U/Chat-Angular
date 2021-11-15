import { ColorsService } from './Services/colors.service';
import { TokenService } from './Services/token.service';
import { UserService } from 'src/app/Services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'szkolka';
  constructor (private tokenService: TokenService, private router: Router, private colorsService: ColorsService) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/Loading')
    this.tokenService.CheckToken();
  }
}
