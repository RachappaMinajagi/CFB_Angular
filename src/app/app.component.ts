import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="minagagi";
  imgURL="../assets/Bridgelab.png";
  userName:String="";

  onchangeImg(){
    console.log(this.name);

  }
  onchangeCall(){
    this.name="Rachappa";
    console.log(this.userName);
  }
   
}
