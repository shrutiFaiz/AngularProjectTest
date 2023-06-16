import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    a:number;
    b:number;
    c:number;

    
    add()
    {
      this.c=this.a+this.b;

    }
    sub():number
    {
      this.c=this.a - this.b;
      console.log("a : "+this.a);
      console.log("b : "+this.b);
      console.log("c : "+this.c);

      return this.c;
    }

    mul():number
    {
      this.c=this.a  * this.b;
      console.log(this.a);
      console.log(this.b);
      console.log(this.c);

      return this.c;
    }
    div():number
    {
      this.c=this.a / this.b;
      console.log(this.a);
      console.log(this.b);
      console.log(this.c);

      return this.c;
    }

    
    clr()
    {
      window.location.reload();
    }
}
