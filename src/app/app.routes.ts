import { Routes } from '@angular/router';
import { App } from './app';
import { Dashboard } from './feature/dashboard/dashboard';
import { User1 } from './feature/user1/user1';
import { User2 } from './feature/user2/user2';
import { Users } from './feature/users/users';
import { Settings } from './feature/settings/settings';
export const routes: Routes = [
    {path:'',component:App,pathMatch:'full'},
    {path:'dashboard',component:Dashboard},
    {path:'users/user1',component:User1},
    {path:'users/user2',component:User2},
    {path:'users',component:Users},
    {path:'settings',component:Settings},
];
