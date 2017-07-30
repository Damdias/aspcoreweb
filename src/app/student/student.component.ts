import { Component } from '@angular/core';
import {ProductRepository} from '../model/student.Repository';
import {Http} from '@angular/http';
import {Student} from '../model/student.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'student-list',
  templateUrl: './student.component.html'  
})
export class studentComponent {
  title = 'Student list';
 private Students : Student[] = [];
  constructor(http: Http){
    var productRepository = new ProductRepository(http);
    productRepository.getStudents()
    .map(res => res.json())
    .subscribe(data => {
        this.Students = <Student[]> data;        
    });
  }
addNew(){
    this.Students.push({
        id : 100,
        firstName:'Damith',
        lastName:'Dias'
    });
    alert("Add student success");
}
}
