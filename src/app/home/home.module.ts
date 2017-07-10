import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent, HomeRoutes } from './home.package'
import { MdButtonModule } from '@angular/material' // MdButtonModule exist.

@NgModule({
    imports: [
        CommonModule,
        HomeRoutes,
        MdButtonModule,
    ],
    declarations: [HomeComponent],
    exports: [
        HomeComponent,
        MdButtonModule,
    ]
})
export class HomeModule {}