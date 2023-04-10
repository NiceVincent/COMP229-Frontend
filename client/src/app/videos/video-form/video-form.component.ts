import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Video } from 'src/app/shared/video.model';
import { VideoService } from 'src/app/shared/video.service';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styles: [
  ]
})
export class VideoFormComponent {
  submitted: boolean = false;
  
  constructor(public service: VideoService, private toastr: ToastrService) {}

  handleFormSubmit() {
    this.submitted = true;
    if (!this.service.videoForm.valid) return;

    const hasId = this.service.videoForm.get('_id')?.value == '';
    if (hasId) {
      this.service.createVideoNote().subscribe(res => {
        this.service.getVideoList();
        // show success popup
        this.toastr.success('Video Note Created Successfully!');
        this.resetForm();
      });
    } else {
      this.service.updateVideoNote().subscribe(res => {
        this.service.getVideoList();
        // show success popup
        this.toastr.success('Video Note Updated Successfully!');
        this.resetForm();
      })
    }
  }

  resetForm() {
    this.service.videoForm.reset(new Video());
    this.submitted = false;
  }
}
