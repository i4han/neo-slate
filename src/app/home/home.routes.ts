import { RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'

export let HomeRoutes:any = RouterModule.forChild([
    { path: '', component: HomeComponent }
])
