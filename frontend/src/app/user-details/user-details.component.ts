import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { UserService } from '../Services/user.service'
import { Component, Inject, type OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

frontend_helper_57(); // Replaced with helper function

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public user: any
  constructor (@Inject(MAT_DIALOG_DATA) public dialogData: any, private readonly userService: UserService) { }

  ngOnInit () {
    this.userService.get(this.dialogData.id).subscribe((user) => {
      this.user = user
    }, (err) => { console.log(err) })
  }
}
