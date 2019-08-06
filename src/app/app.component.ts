import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Spring'];
  userModel = new User('Yash',  'yashtwinhearts@gmail.com', '9560305640');
   constructor(private enrollService : EnrollmentService){}
   
  onSubmit(){
    this.enrollService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!!!' , data),
      error => console.error('Errors!', error)
      
    )
  }
}
