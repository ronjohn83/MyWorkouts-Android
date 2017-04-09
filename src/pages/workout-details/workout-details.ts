import { Component } from '@angular/core';
import { WorkoutService } from '../../app/services/workout.service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {

    workout:any;
    results:any;

    constructor(public navCtrl: NavController,
    workoutService: WorkoutService, public params:
    NavParams) {

        this.workout = this.params.get('workout');

    }



}
