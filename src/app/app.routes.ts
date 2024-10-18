import { Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UserdetaleComponent } from './component/userdetale/userdetale.component';
import { userResolver } from './service/user.resolver';

export const routes: Routes = [
    {path:'users', component: UsersComponent},
    {path:'user/:uuid', component: UserdetaleComponent, resolve: {resolvedResponse: userResolver} },
    {path:'**', redirectTo:'users'}


];
