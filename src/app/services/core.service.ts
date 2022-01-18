import { Injectable } from '@angular/core';

import { Image, SearchValues } from 'src/app/model/core.model';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  readonly restrict = "e.,"
  readonly possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  readonly urlImage = "https://picsum.photos/id/";
  readonly qtyElements = 4000;
    
  getImageList(): Image[] {
    let imageList: Image[] = [];

    for(let id = 1; id <= this.qtyElements; id++) {
      const url = this.urlImage + id + "/500/500";

      imageList.push({
        id,
        url,
        description: this.makeRandom()
      });
    }

    return imageList;
  }

  filterImageList(imageList: Image[], searchValues: SearchValues): Image[] {
    if (searchValues?.id) {
      imageList = imageList.filter(
        (image: Image) => image.id.toString().includes(searchValues.id.toString())
      );
    }

    if (searchValues?.description) {
      imageList = imageList.filter(
        (image: Image) => image.description.includes(searchValues.description)
      );
    }

    return imageList;
  }

  // https://stackoverflow.com/questions/54746700/generate-random-string-with-angular-6
  private makeRandom() {
    let text = "";

    for (let i = 0; i < 16; i++) {
      text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    
    return text;
  }
}