import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AddWorkoutPage } from '../pages/add-workouts/add-workout';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutsPage } from '../pages/workouts/workouts'
import { WorkoutDetailsPage } from '../pages/workout-details/workout-details'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddWorkoutPage,
    TabsPage,
    WorkoutsPage,
    WorkoutDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddWorkoutPage,
    TabsPage,
    WorkoutsPage,
    WorkoutDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
