import { RouterModule } from '@angular/router'

export default RouterModule.forRoot([
    { path: '', loadChildren: './home/home.module' }
])