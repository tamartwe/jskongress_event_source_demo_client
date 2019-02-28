import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { FollowingComponent } from './following/following.component';
import { TwittDetailComponent }  from './twitt-detail/twitt-detail.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'twitt/:id', component: TwittDetailComponent },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'following', component: FollowingComponent },
  { path: 'userSearch', component: UserSearchComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {
  
}