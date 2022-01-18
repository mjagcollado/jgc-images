import { Component, Input } from '@angular/core';

import { Image } from 'src/app/model/core.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() imageList: Image[] = [];

  updateUrl(event: any): void {
    event.target.src = "./../assets/no-image.png";
  }
}
