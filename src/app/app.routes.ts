import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { combineLatest } from 'rxjs';
import { UarsComponent } from './components/uars/uars.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'userhome',component:UserhomeComponent,
        children:[
            {path:'archives',component:ArchivesComponent},
            {path:'submission',component:UarsComponent}
        ]
    }
];
