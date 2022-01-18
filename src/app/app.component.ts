import { Component, OnInit } from '@angular/core';

import { Image, SearchValues } from './model/core.model';
import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imageList: Image[];
  filteredImageList: Image[] = [];

  constructor(private coreService: CoreService) {
    this.imageList = this.coreService.getImageList();
  }
  
  ngOnInit(): void {
    this.filteredImageList = this.imageList;
  }

  filterList(searchValues: SearchValues) {
    this.filteredImageList = this.coreService.filterImageList(
      this.imageList,
      searchValues
    );
  }
}
