import { Routes } from '@angular/router';
import { PhotoList } from './photo-list/photo-list';
import { Home } from './home/home';
import { PhotoDetail } from './photo-detail/photo-detail';

export const routes: Routes = [
    {path:'photos',component:PhotoList},
    {path:'photos/:id',component:PhotoDetail},
    {path:'',component:Home},
];
