import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [MenuComponent, SearchBarComponent, SpinnerComponent],
  imports: [CommonModule,
  MatToolbarModule,
  RouterModule,
  MatMenuModule,
  MatInputModule,
  ReactiveFormsModule
  ],
  exports: [MenuComponent, SearchBarComponent, SpinnerComponent],
})
export class MenuModule {}
