
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ConsultingComponent } from './consulting/consulting.component';
import { FreeTrainingComponent } from './free-training/free-training.component';
import { ResourcesComponent } from './resources/resources.component';
import { CoursesComponent } from './courses/courses.component';
import { TestingComponent } from './testing/testing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { SliderModule } from './slider/slider.module';
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    ConsultingComponent,
    FreeTrainingComponent,
    ResourcesComponent,
    CoursesComponent,
    TestingComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    SliderModule,
    HomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'consulting', component: ConsultingComponent },
      { path: 'free-training', component: FreeTrainingComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'testing', component: TestingComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found' },
   ])
  ],      
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
