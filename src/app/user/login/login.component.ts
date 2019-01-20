import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private error:boolean=false;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
      this.authService.login(form).subscribe(data => { 
          localStorage.setItem("token",data.token);
          this.router.navigate(['/home']);
        },
        (err:HttpErrorResponse)=> {
          this.error=true;
        });
    }
}
