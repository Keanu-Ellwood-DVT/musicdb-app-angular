import { Component, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  form: FormGroup;

  constructor(private queryService: QueryService, private fb: FormBuilder) {}

  get query() {
    return this.form.get('query');
  }

  ngOnInit() {
    this.form = this.fb.group({
      query: null
    });

    this.query.valueChanges.subscribe(value => {
     this.queryService.updateQuery(value);
    });
  }
}
