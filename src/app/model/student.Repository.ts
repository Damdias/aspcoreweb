import {Injectable} from '@angular/core';
import {Student} from './student.model';
import {Http} from '@angular/http';
import {AppSettings} from '../infrastructure/app.config';


@Injectable()
export class ProductRepository{

    private students: Student[] = [];
    constructor(private http:Http){

    }
    getStudents(){

    return  this.http.get(new AppSettings().SERVICE_URL+'student' );
      // Call map on the response observable to get the parsed people object
      // .map(res => res.json());
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      // .subscribe(people => {
      //   this.students = people;
      //   return this.students;
      // });
      
    }
}