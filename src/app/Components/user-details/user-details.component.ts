import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  userID = 0;

  constructor(myActivated:ActivatedRoute) {
    this.userID = myActivated.snapshot.params['id'];
  }

}
