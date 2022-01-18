import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SearchValues } from 'src/app/model/core.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchValues: EventEmitter<SearchValues> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formValues => {
      this.searchValues.emit(formValues);
   })
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [],
      description: [""]
    });
  }
}
