import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";

const allModules = [
  MatToolbarModule,
  MatIconModule,
  MatSlideToggleModule,
  MatButtonModule
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
