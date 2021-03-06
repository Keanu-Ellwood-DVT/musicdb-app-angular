import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QueryService } from '../../services/query.service';
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

    this.query.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      if (/\S/.test(value)) {
        this.queryService.updateQuery(value);
      } else {
        this.queryService.updateQuery('');
      }
    });
  }
}
