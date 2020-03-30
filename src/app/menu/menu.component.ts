import { Component, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchStateService } from '../services/search-state.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  form: FormGroup;
  searchbarState: boolean;

  constructor(private queryService: QueryService, private fb: FormBuilder, private searchStateService: SearchStateService) {}

  get query() {
    return this.form.get('query');
  }

  ngOnInit() {

    this.searchStateService.searchState.subscribe(value =>
      this.searchbarState = value);

    this.form = this.fb.group({
      query: null
    });

    this.query.valueChanges.subscribe(value => {
     this.queryService.updateQuery(value);
    });
  }
}
