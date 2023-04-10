import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Video } from '../shared/video.model';
import { VideoService } from '../shared/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styles: [
  ]
})
export class VideosComponent implements OnInit {

  constructor(public service: VideoService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.getVideoList();
  }

  editForm(selectedNote: Video) {
    this.service.videoForm.setValue({
      _id: selectedNote._id,
      name: selectedNote.name,
      videoLink: selectedNote.videoLink,
      notes: selectedNote.notes
    });
  }

  handleDelete(noteId: string) {
    if (confirm('Are you sure to delete the record?')) {
      this.service.deleteVideoNote(noteId).subscribe(res => {
        this.service.getVideoList();
        // show successfully delete the record
        this.toastr.success('Video Note Deleted Successfully!');
      });
    }
  }
}
