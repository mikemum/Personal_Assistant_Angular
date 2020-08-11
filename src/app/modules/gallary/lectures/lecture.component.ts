import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gallery-lecture',
  templateUrl: './lecture.component.html',
  styles: [],
})
export class LectureComponent implements OnInit {
  lectureUrl: string =
    'https://personalassistantstorage.blob.core.windows.net/lectures';
  lecture;
  // lecturePath: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.lecture = `${this.lectureUrl}/${param.lecture}`;
    });
    // this.lecturePath = `${this.lectureUrl}/${this.lecture}`;
  }

  ngOnInit(): void {}
}
