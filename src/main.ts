import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { RareDiseaseListComponent } from './app/components/rare-disease-list/rare-disease-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'diseases', component: RareDiseaseListComponent },
  { path: '', redirectTo: '/diseases', pathMatch: 'full' },
  { path: '**', redirectTo: '/diseases' }
];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
