import { AppComponent } from './app.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
