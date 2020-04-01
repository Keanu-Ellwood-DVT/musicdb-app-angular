import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QueryService } from '../services/query.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  form: FormGroup;

  constructor(private queryService: QueryService, private fb: FormBuilder) {}

  get query() {
    return this.form.get('query');
  }

  ngOnInit() {
    this.form = this.fb.group({
      query: null,
    });

    this.query.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.queryService.updateQuery(value)
    });
  }
}
