import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rollno:number=101;
  name:string='CJC Pune';
  status:boolean=true;
  addr:any='Karve'

arr:number[]=[101,102,103,104]

starr:string[]=['cjc','Pune','Karve']

stu1:Student={
  id:11,
  sname:'ABC',
  addr:'Warje'
}
stu2:Student={
  id:12,
  sname:'XYZ',
  addr:'Nagar'
}
stu3:Student={
  id:13,
  sname:'PQR',
  addr:'BSL'
}
stu4:Student={
  id:14,
  sname:'LMN',
  addr:'BSL'
}

stuarray:Student[]=[this.stu1,this.stu2,this.stu3,this.stu4]

}
