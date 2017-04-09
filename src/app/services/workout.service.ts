import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{

    apikey:string;
    workoutUrl:string

    constructor(private _http: Http){

        this.apikey = '7kws7L0DJUNxetp6hBXAXlIgkCAA6Fdy';
        this.workoutUrl = 'https://api.mlab.com/api/1/databases/myworkouts_db/collections/workouts';
    }

    getWorkouts(){
       return this._http.get(this.workoutUrl+'?apiKey='+this.apikey)
        .map(res => res.json());
           
    }

    addWorkout(workout){

        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this._http.post(this.workoutUrl+'?apiKey='+this.apikey, JSON.stringify(workout), {headers: headers})
            .map(res => res.json());
  }
}