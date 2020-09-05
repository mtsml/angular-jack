import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashbord', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashbord', component: DashbordComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }