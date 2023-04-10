import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoFormComponent } from './videos/video-form/video-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module for ngx-toastr
    ToastrModule.forRoot(), // ToastrModule for ngx-toastr
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
