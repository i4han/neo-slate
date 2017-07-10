import { RouterModule } from '@angular/router'

export let AppRoutes:any = RouterModule.forRoot([
    { path: '', loadChildren: './home/home.module' }
])