import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  active: string = "default";
  changeClass(){
    if(this.active=="default"){
      this.active = "add"
    }
    else if (this.active == "add"){
            this.active = "remove"
    }
    else if (this.active == "remove"){
            this.active = "add"
    }
    else{
      this.active = "default"
    }
  }
}
