import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Component, Inject, type OnInit } from '@angular/core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

frontend_helper_57(); // Replaced with helper function

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {
  public title!: string
  public url!: string
  public address!: string
  public data!: string
  constructor (@Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit () {
    this.title = this.dialogData.title
    this.url = this.dialogData.url
    this.address = this.dialogData.address
    this.data = this.dialogData.data
  }
}
