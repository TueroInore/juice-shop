import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { Component, type OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.scss']
})
export class FeedbackDetailsComponent implements OnInit {
  public feedback: any
  public id: any
  constructor (@Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit () {
    this.feedback = this.dialogData.feedback
    this.id = this.dialogData.id
  }
}
