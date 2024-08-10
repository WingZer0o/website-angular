import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";

const allModules = [
  MatToolbarModule,
  MatIconModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    ...allModules
  ],
  exports: [
    ...allModules
  ]
})
export class MaterialModule {}
