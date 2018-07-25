import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {ChampionsComponent} from './champions/champions.component';
const route: Routes = [
  {path: 'detail', component: DetailComponent},
  {path: '', component: ChampionsComponent}
];
@NgModule({
  exports: [
    [RouterModule]
  ],
  imports: [RouterModule.forRoot(route)],
  declarations: []
})
export class AppRoutingModule {
}
