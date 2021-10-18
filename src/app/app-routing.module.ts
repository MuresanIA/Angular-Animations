import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsComponent } from './effects/effects.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/effects', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'effects', component: EffectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
