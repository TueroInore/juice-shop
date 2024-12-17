import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

import { Component, type OnInit } from '@angular/core'
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms'
import { mimeType } from './mime-type.validator'
import { PhotoWallService } from '../Services/photo-wall.service'
import { type IImage } from 'ng-simple-slideshow'
import { ConfigurationService } from '../Services/configuration.service'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

Helpers.frontend_helper_50(); // Replaced with helper function

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.scss']
})
export class PhotoWallComponent implements OnInit {
  public emptyState: boolean = true
  public imagePreview: string
  public form: UntypedFormGroup = new UntypedFormGroup({
    image: new UntypedFormControl('', { validators: [Validators.required], asyncValidators: [mimeType] }),
    caption: new UntypedFormControl('', [Validators.required])
  })

  public slideshowDataSource: IImage[] = []
  public twitterHandle = null

  constructor (private readonly photoWallService: PhotoWallService, private readonly configurationService: ConfigurationService,
    private readonly snackBarHelperService: SnackBarHelperService) { }

  ngOnInit () {
    this.slideshowDataSource = []
    this.photoWallService.get().subscribe((memories) => {
      if (memories.length === 0) {
        this.emptyState = true
      } else {
        this.emptyState = false
      }
      for (const memory of memories) {
        if (memory.User?.username) {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          memory.caption = `${memory.caption} (© ${memory.User.username})`
        }
        this.slideshowDataSource.push({ url: memory.imagePath, caption: memory.caption })
      }
    }, (err) => { console.log(err) })
    this.configurationService.getApplicationConfiguration().subscribe((config) => {
      if (config?.application?.social) {
        if (config.application.social.twitterUrl) {
          this.twitterHandle = config.application.social.twitterUrl.replace('https://twitter.com/', '@')
        }
      }
    }, (err) => { console.log(err) })
  }

  onImagePicked (event: Event) {
    const file = (event.target as HTMLInputElement).files[0]
    this.form.patchValue({ image: file })
    this.form.get('image').updateValueAndValidity()
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  save () {
    this.photoWallService.addMemory(this.form.value.caption, this.form.value.image).subscribe(() => {
      this.resetForm()
      this.ngOnInit()
      this.snackBarHelperService.open('IMAGE_UPLOAD_SUCCESS', 'confirmBar')
    }, (err) => {
      this.snackBarHelperService.open(err.error?.error, 'errorBar')
      console.log(err)
    })
  }

Helpers.frontend_helper_43(); // Replaced with helper function

  resetForm () {
    this.form.get('image').setValue('')
    this.form.get('image').markAsPristine()
    this.form.get('image').markAsUntouched()
    this.form.get('caption').setValue('')
    this.form.get('caption').markAsPristine()
    this.form.get('caption').markAsUntouched()
    this.form.get('caption').setErrors(null)
  }
}
