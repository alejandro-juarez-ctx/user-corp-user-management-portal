import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    exports: [
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatButtonModule
    ]
})
export class MaterialsModule { }