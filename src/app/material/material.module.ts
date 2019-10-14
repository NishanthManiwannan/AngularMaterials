import { NgModule } from '@angular/core';
import { MatFormFieldModule,
         MatButtonModule, 
         MatButtonToggleModule,
         MatIconModule,
         MatProgressSpinnerModule,
         MatToolbarModule,
         MatSidenavModule,
         MatMenuModule,
         MatListModule,
         MatGridListModule,
         MatAutocompleteModule,
         MatExpansionModule,
         MatCardModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatTooltipModule,
         MatSnackBarModule,
         MatTableModule,
         MatSortModule,
         MatPaginatorModule
} from '@angular/material'

import {MatBadgeModule} from '@angular/material/badge'

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,

  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  
  MatFormFieldModule,
  MatAutocompleteModule,

  MatDatepickerModule,
  MatNativeDateModule,

  MatTooltipModule,

  MatSnackBarModule,

  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
