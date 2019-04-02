import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUser } from 'src/app/interfaces/User';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: IUser;
  editeForm = true;
  newUser: IUser;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private location: Location,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    
    this.userService.getuserById(id).subscribe((data: IUser)=> {
      this.user = data;
    }, (err) => { 
      console.log(err);
    });
  }

  edit() {
    this.editeForm = !this.editeForm;
  }

  onFormSubmit() {
    this.userService.editUser(this.user).subscribe((data: IUser) => {
      this.editeForm = !this.editeForm;
      this.flashMessage.show('Your information was corrected successfully', { cssClass: 'alert-success', timeout: 2000 });
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1800);
    })
  }

  back() {
    this.location.back();
  }
}
