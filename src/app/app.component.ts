import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Lab4';

  user:string[] = [];
  getData(data:any){
    this.user.push(data);
  }
  
}
